import React from 'react';
import styled from 'styled-components';

const Regions = ({ regions, selectRegion }) => {
  return (
    <StyleSheet>
      <div className="region-container">
        {regions.map((region, index) => {
          return (
            <button
              type="button"
              className="btn"
              key={index}
              onClick={() => selectRegion(region)}
            >
              {region}
            </button>
          );
        })}
      </div>
    </StyleSheet>
  );
};

const StyleSheet = styled.div`
  .region-container {
    margin: 2rem 0.5rem;
    height: 40%;
    text-align: center;
  }
  .btn {
    margin: 0.2rem;
  }
`;

export default Regions;
