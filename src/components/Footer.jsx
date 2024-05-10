import styled from 'styled-components';

const Footer = () => {
  return (
    <StyleSheet>
      <div className="footer">
        <p>
          copyrigt &copy; Coffee Hub {new Date().getFullYear()} All rights
          reserved. Data is fabricated for educational purpose.
        </p>
      </div>
    </StyleSheet>
  );
};

export default Footer;

const StyleSheet = styled.div`
  background: var(--coffee-5);
  .footer {
    color: var(--white);
    width: var(--view-Width);
    max-width: var(--max-Width);
    padding: 4rem 4rem;
    margin: 0 auto;
    letter-spacing: 1px;
    text-align: center;
  }
`;
