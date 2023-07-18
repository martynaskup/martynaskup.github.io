import { RouteObject } from 'react-router-dom';
import AppLayout from '../components/mainLayout/AppLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ContactInfoPage from '../pages/ContactInfoPage';
import NoRageFound404 from '../pages/NoRageFound404';
import paths from './paths';
import ProjectsOverview from '../pages/ProjectsPage/ProjectsOverview';
import PreviousPortfolio from '../pages/ProjectsPage/Projects/PreviousPortfolio';
import Budget from '../pages/ProjectsPage/Projects/NewProjects/Budget/Budget';
import Overview from '../pages/ProjectsPage/Projects/NewProjects/Overview';

const projectsRoutes: RouteObject[] = [
  {
    path: paths.projectsPaths.base,
    element: <ProjectsOverview />,
  },
  {
    path: paths.projectsPaths.previousPortfolio,
    element: <PreviousPortfolio />,
  },
  { path: paths.projectsPaths.newProjectsOverview, element: <Overview /> },
  { path: paths.projectsPaths.budget, element: <Budget /> },
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
        element: <ContactInfoPage />,
      },
      {
        path: '*',
        element: <NoRageFound404 />,
      },
    ],
  },
];

export default routes;
