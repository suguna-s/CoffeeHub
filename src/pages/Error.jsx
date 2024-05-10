import { useRouteError, Link } from 'react-router-dom';
import image from '../assets/404-error.png';
import styled from 'styled-components';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <StyleSheet>
        <div>
          <img src={image} alt="not found" />
          <p>Oops! Coffee not found!</p>
          <Link to="/">Back to Home </Link>
        </div>
      </StyleSheet>
    );
  }
  return (
    <>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </>
  );
};

const StyleSheet = styled.div`
  background: #ddd7cb;
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
    border-radius: 0.5rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    line-height: 2;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: black;
    text-weight: 400;
  }
  a {
    color: var(--coffee-50);
    text-transform: capitalize;
  }
`;

export default Error;
