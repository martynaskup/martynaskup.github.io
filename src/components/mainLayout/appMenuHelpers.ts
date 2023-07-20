import paths from '../../routes/paths';

export const menuKeys = {
  home: '1',
  about: '2',
  contactMe: '3',
  subMenus: {
    projects: 'sub1',
    newProjects: 'sub2',
  },
  projects: {
    overview: '11',
    previousPortfolio: '12',
    newProjects: {
      overview: '21',
      budget: '22',
    },
  },
};

export function getMenuKeys(locationPath: string) {
  return {
    selectedKeys: getSelectedKeys(locationPath),
    openKeys: getOpenKeys(locationPath),
  };
}

function getSelectedKeys(locationPath: string) {
  switch (locationPath) {
    case paths.about:
      return [menuKeys.about];
    case paths.base:
    case paths.home:
      return [menuKeys.home];
    case paths.contactMe:
      return [menuKeys.contactMe];
    case paths.projectsPaths.base:
      return [menuKeys.projects.overview];
    case paths.projectsPaths.previousPortfolio:
      return [menuKeys.projects.previousPortfolio];
    case paths.projectsPaths.newProjectsOverview:
      return [menuKeys.projects.newProjects.overview];
    case paths.projectsPaths.budget:
      return [menuKeys.projects.newProjects.budget];
    default:
      return [menuKeys.home];
  }
}

function getOpenKeys(locationPath: string) {
  switch (locationPath) {
    case paths.projectsPaths.base:
    case paths.projectsPaths.previousPortfolio:
      return [menuKeys.subMenus.projects];
    case paths.projectsPaths.newProjectsOverview:
    case paths.projectsPaths.budget:
      return [menuKeys.subMenus.projects, menuKeys.subMenus.newProjects];
    default:
      return [];
  }
}
