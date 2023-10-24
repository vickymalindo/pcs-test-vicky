import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Notification from '../pages/Notifications';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/notif',
    element: <Notification />,
  },
]);
