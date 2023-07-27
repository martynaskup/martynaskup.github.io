import { RouteObject } from 'react-router-dom';
import AppLayout from '../components/mainLayout/AppLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import ContactInfoPage from '../pages/ContactInfoPage';
import NoPageFound404 from '../pages/NoPageFound404';
import paths from './paths';
import PreviousPortfolioInfoCard from '../pages/ProjectsPage/InfoCards/PreviousPortfolioInfoCard';
import Budget from '../projects/Budget/Budget';
import Overview from '../pages/ProjectsPage/Overview';
import ThisPortfolioInfoCard from '../pages/ProjectsPage/InfoCards/ThisPortfolioInfoCard';

const projectsRoutes: RouteObject[] = [
  {
    path: paths.projectsPaths.overview,
    element: <Overview />,
  },
  {
    path: paths.projectsPaths.thisPortfolio,
    element: <ThisPortfolioInfoCard />,
  },
  {
    path: paths.projectsPaths.previousPortfolio,
    element: <PreviousPortfolioInfoCard />,
  },
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
        element: <NoPageFound404 />,
      },
    ],
  },
];

export default routes;
