import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import Statistics from '../pages/Statistics';
import CampaignDetails from '../pages/CampaignDetails';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../../public/data.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/campaign/:id',
        element: <CampaignDetails></CampaignDetails>,
        loader: () => fetch('../../public/data.json'),
      },
    ],
  },
]);

export default route;
