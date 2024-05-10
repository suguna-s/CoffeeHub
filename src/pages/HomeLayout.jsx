import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.status === 'loading';
  return (
    <>
      <Navbar />
      <div className="pages">
        {isLoading ? <div className="loading" /> : <Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
