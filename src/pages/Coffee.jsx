import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const singleCoffeeUrl = 'https://fake-coffee-api.vercel.app/api/';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCoffeeUrl}${id}`);
  console.log(data);
  return { id, data };
};

const Coffee = () => {
  const { id, data } = useLoaderData();
  const {
    description,
    name,
    image_url,
    region,
    roast_level,
    grind_option,
    flavor_profile,
  } = data[0];
  return (
    <StyleSheet>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
        <div className="heading-underline" />
      </header>
      <div className="coffee">
        <img src={image_url} alt={name} className="img" />
        <div className="coffee-info">
          <p>
            <span className="coffee-data">Name: </span>
            {name}
          </p>
          <p>
            <span className="coffee-data">Description: </span>
            <span className="coffee-des">{description}</span>
          </p>
          <p>
            <span className="coffee-data">Region: </span>
            {region}
          </p>
          <p>
            <span className="coffee-data">Roast Level: </span>
            {roast_level}
          </p>
          <p>
            <span className="coffee-data">Flavor Profile: </span>
            {flavor_profile.join(', ')}
          </p>
          <p>
            <span className="coffee-data">Grind Options: </span>
            {grind_option.join(', ')}
          </p>
        </div>
      </div>
    </StyleSheet>
  );
};

const StyleSheet = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    background: var(--white);
    border-radius: var(--border-Radius);
  }
  .coffee-info {
    padding-top: 2rem;
  }
  .coffee p {
    font-weight: 500;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .coffee-data {
    border-radius: var(--border-Radius);
    color: brown;
    letter-spacing: var(--letter-Spacing);
  }
  .coffee-des {
    diplay: inline-block;
  }
  @media (min-width: 992px) {
    .coffee {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .coffee-info {
      padding-top: 0;
    }
  }
`;

export default Coffee;
