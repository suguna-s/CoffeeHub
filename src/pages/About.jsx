import styled from 'styled-components';

const About = () => {
  return (
    <StyleSheet>
      <h2>Our Story</h2>
      <div className="heading-underline" />
      <p>
        Coffee Hub was founded by a team of coffee enthusiasts who share a deep
        love and appreciation for the beverage that fuels our mornings and
        enriches our lives. Frustrated by the lack of comprehensive coffee
        resources that focused solely on education and exploration, we set out
        to create a platform where coffee lovers could immerse themselves in the
        world of coffee without the pressure of making purchases.
      </p>
      <h2>Our Mission</h2>
      <div className="heading-underline" />
      <p>
        Our mission at Coffee Hub is to educate, inspire, and celebrate the
        coffee community by offering a wealth of resources and knowledge about
        all things coffee-related. From exploring different coffee origins and
        processing methods to discovering unique brewing techniques and flavor
        profiles, we strive to be your go-to source for coffee education and
        appreciation.
      </p>
      <h2>What Sets Us Apart</h2>
      <div className="heading-underline" />
      <p>
        What sets Coffee Hub apart is our unwavering dedication to authenticity,
        expertise, and community. We curate our content with care, ensuring that
        each article, guide, and review is thoroughly researched and
        thoughtfully crafted to provide valuable insights and inspiration to our
        audience.
      </p>
      <h2>Our Promise</h2>
      <div className="heading-underline" />
      <p>
        When you visit Coffee Hub, you can expect nothing less than a treasure
        trove of coffee knowledge, inspiration. Whether you're a seasoned coffee
        lover or a curious beginner, we're here to guide you on your coffee
        journey with enthusiasm and expertise. So grab a cup of your favorite
        brew, explore our content, and join us in celebrating the wonderful
        world of coffee!
      </p>
    </StyleSheet>
  );
};

const StyleSheet = styled.div`
  h2 {
    text-align: center;
  }
  p {
    line-height: 2;
    color: var(--grey-50);
    margin-top: 2rem;
    padding-bottom: 2rem;
    font-size: 20px;
  }
`;

export default About;
