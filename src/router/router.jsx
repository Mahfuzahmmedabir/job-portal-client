import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/shared/Home';
import MainLayout from '../layout/MainLayout';
import Register from '../page/register/Register';
import Login from '../page/Login/Login';
import JobDeatils from '../page/shared/JobDeatils';



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
        element: <JobDeatils></JobDeatils>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
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
