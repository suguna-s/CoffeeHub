import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CoffeeProductsList from '../components/CoffeeProductsList';
import Regions from '../components/Regions';
import { useState } from 'react';

const baseUrl = 'https://fake-coffee-api.vercel.app/api';

export const loader = async () => {
  const response = await axios.get(baseUrl);
  const coffeedetails = await response.data;
  const regions = ['all', ...new Set(coffeedetails.map((item) => item.region))];
  console.log(regions);

  return { coffeedetails, regions };
};

const Home = () => {
  const { coffeedetails, regions } = useLoaderData();
  const [filteredCoffeeDetails, setFilteredCoffeeDtails] =
    useState(coffeedetails);

  const selectRegion = (region) => {
    if (region === 'all') {
      console.log(region);
      setFilteredCoffeeDtails(coffeedetails);
    } else {
      const regionalCoffeeDetails = coffeedetails.filter(
        (coffee) => coffee.region === region
      );
      console.log(regionalCoffeeDetails);
      setFilteredCoffeeDtails(regionalCoffeeDetails);
    }
  };

  return (
    <>
      <Regions regions={regions} selectRegion={selectRegion} />
      <CoffeeProductsList coffeedetails={filteredCoffeeDetails} />
    </>
  );
};

export default Home;
