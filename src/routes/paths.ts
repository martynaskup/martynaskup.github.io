const generatePathToProject = (name: string) => `projects/${name}`;
const generatePathToNewProject = (name: string) => `projects/new/${name}`;

const projectsPaths = {
  base: 'projects',
  previousPortfolio: generatePathToProject('previousPortfolio'),
  newProjectsOverview: generatePathToProject('new'),
  budget: generatePathToNewProject('budget'),
};

const paths = {
  base: '/',
  home: '/',
  about: 'about',
  projectsPaths: projectsPaths,
  contactMe: 'contactMe',
  noRouteMatch: '*',
};

export default paths;
