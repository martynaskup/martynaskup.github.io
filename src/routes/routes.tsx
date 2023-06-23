import { RouteObject } from 'react-router-dom';
import AppLayout from '../components/mainLayout/AppLayout';
import Home from '../pages/HomePage/Home';
import About from '../pages/AboutPage/About';
import Projects from '../pages/ProjectsPage/Projects';
import ContactInfo from '../pages/ContactInfo';
import NoRouteMatch from '../pages/NoRouteMatch';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contactMe',
        element: <ContactInfo />,
      },
      {
        path: '*',
        element: <NoRouteMatch />,
      },
    ],
  },
];

export default routes;
