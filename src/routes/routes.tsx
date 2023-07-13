import { RouteObject } from 'react-router-dom';
import AppLayout from '../components/mainLayout/AppLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ContactInfo from '../pages/ContactInfo';
import NoRouteMatch from '../pages/NoRouteMatch';
import paths from './paths';
import ProjectsInfo from '../pages/ProjectsPage/ProjectsInfo';
import PreviousPortfolio from '../pages/ProjectsPage/Projects/PreviousPortfolio';
import Budget from '../pages/ProjectsPage/Projects/Budget/Budget';

const projectsRoutes: RouteObject[] = [
  {
    path: paths.projectsPaths.base,
    element: <ProjectsInfo />,
  },
  {
    path: paths.projectsPaths.previousPortfolio,
    element: <PreviousPortfolio />,
  },
  { path: paths.projectsPaths.budget, element: <Budget /> },
  {
    path: paths.projectsPaths.project2,
    element: <> PROJECT 2</>,
  },
];

const routes: RouteObject[] = [
  {
    path: paths.base,
    element: <AppLayout />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
      {
        path: paths.about,
        element: <AboutPage />,
      },
      {
        element: <ProjectsPage />,
        children: projectsRoutes,
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
