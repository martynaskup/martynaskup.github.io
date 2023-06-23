import { RouteObject } from 'react-router-dom';
import AppLayout from '../components/mainLayout/AppLayout';
import Home from '../pages/HomePage/Home';
import About from '../pages/AboutPage/About';
import Projects from '../pages/ProjectsPage/Projects';
import ContactInfo from '../pages/ContactInfo';
import NoRouteMatch from '../pages/NoRouteMatch';
import paths from './paths';

const routes: RouteObject[] = [
  {
    path: paths.main,
    element: <AppLayout />,
    children: [
      {
        path: paths.home,
        element: <Home />,
      },
      {
        path: paths.about,
        element: <About />,
      },
      {
        path: paths.projects,
        element: <Projects />,
      },
      {
        path: paths.contactMe,
        element: <ContactInfo />,
      },
      {
        path: paths.noRouteMatch,
        element: <NoRouteMatch />,
      },
    ],
  },
];

export default routes;
