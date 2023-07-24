const generatePathToProject = (name: string) => `projects/${name}`;
export const generatePathToPage = (pagePath: string) => `/${pagePath}`;

const projectsPaths = {
  overview: 'projects',
  previousPortfolio: generatePathToProject('previousPortfolio'),
  budget: generatePathToProject('budget'),
};

const paths = {
  base: '/',
  home: '',
  about: 'about',
  projectsPaths: projectsPaths,
  contactMe: 'contactMe',
};

export default paths;
