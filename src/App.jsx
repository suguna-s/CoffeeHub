import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, About, Home, Newsletter, Error, Coffee } from './pages';
import { loader as homeLoader } from './pages/Home';
import { loader as coffeeLoader } from './pages/Coffee';
import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
      },
      {
        path: 'coffee/:id',
        loader: coffeeLoader,
        element: <Coffee />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
