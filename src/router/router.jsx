import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/shared/Home';
import MainLayout from '../layout/MainLayout';
import Register from '../page/register/Register';
import Login from '../page/Login/Login';
import JobDeatils from '../page/shared/JobDeatils';
import ProviteRoute from '../page/shared/ProviteRoute';
import JobApply from '../page/shared/JobApply';




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/jobs/:id',
        element: (
          <ProviteRoute>
            <JobDeatils></JobDeatils>
          </ProviteRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: '/jobApply/:id',
        element: <ProviteRoute>
          <JobApply></JobApply>
        </ProviteRoute>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
