import React from 'react';
import CoffeeCard from './CoffeeCard';
import styled from 'styled-components';

const CoffeeProductsList = ({ coffeedetails }) => {
  const newCoffeedetails = coffeedetails.filter(
    (item) => !(item.id === 3 || item.id === 17)
  );
  //console.log(coffeedetails);
  return (
    <StyleSheet>
      {newCoffeedetails.map((item) => {
        return <CoffeeCard key={item.id} {...item} />;
      })}
    </StyleSheet>
  );
};

const StyleSheet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default CoffeeProductsList;
