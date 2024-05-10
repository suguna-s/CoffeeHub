import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import heroImage from '../assets/hero.jpg';

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  console.log(isHomepage);
  return (
    <StyleSheet>
      <div className="navbar">
        <span className="logo-name">Coffee Hub</span>
        <div className="page-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/newsletter" className="link">
            Newsletter
          </Link>
        </div>
      </div>
      {isHomepage && (
        <div
          className="hero"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="content">
            <p>
              Welcome to Coffee Hub, your premier destination for coffee
              enthusiasts! At Coffee Hub, we're passionate about sharing the
              rich and diverse world of coffee with newcomers alike. Our
              platform is dedicated to providing curated information,
              fascinating facts, and expert insights into the art and science of
              coffee,without the option for purchasing.
            </p>
            <div>
              <Link to="/about" className="btn">
                About Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </StyleSheet>
  );
};

const StyleSheet = styled.nav`
  background: var(--coffee-5);
  .navbar {
    width: var(--view-Width);
    max-width: var(--max-Width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo-name {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--coffee-50);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .page-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .link {
    color: var(--white);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 1px;
  }
  .link:hover {
    color: var(--coffee-70);
  }
  .active {
    color: var(--coffee-50);
  }

  .hero {
    min-height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: right;
      margin: 0 auto;
      letter-spacing: 1px;
      color: var(--white);
      padding: 3rem 4rem;
    }
  }

  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .page-links {
      flex-direction: row;
      margin-top: 0;
    }
    .hero {
      .content {
        justify-content: flex-end;
        padding: 7rem 3rem 7rem 50rem;
      }
    }
  }
`;

export default Navbar;
