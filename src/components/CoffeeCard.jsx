import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CoffeeCard = ({ id, name, region, image_url }) => {
  return (
    <StyleSheet>
      <div>
        <div>
          <img src={image_url} alt={name} className="img" />
        </div>
        <div className="footer">
          <h5>{name}</h5>
          <h5 className="region">{region}</h5>
          <Link to={`/coffee/${id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </StyleSheet>
  );
};

const StyleSheet = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-20);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--border-Radius);
  :hover {
    box-shadow: var(--shadow-40);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--border-Radius);
    border-top-right-radius: var(--border-Radius);
  }
  .footer {
    padding: 1.5rem;
    text-align: center;
    h5 {
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    .region {
      color: var(--grey-60);
      font-size: 100%;
    }
  }
`;

export default CoffeeCard;
