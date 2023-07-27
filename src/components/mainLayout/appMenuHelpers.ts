import paths from '../../routes/paths';

export const menuKeys = {
  home: '1',
  about: '2',
  contactMe: '3',
  subMenus: {
    projects: 'sub1',
  },
  projects: {
    overview: '11',
    thisPortfolio: '12',
    previousPortfolio: '13',
    budget: '14',
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
    case paths.projectsPaths.overview:
      return [menuKeys.projects.overview];
    case paths.projectsPaths.previousPortfolio:
      return [menuKeys.projects.previousPortfolio];
    case paths.projectsPaths.budget:
      return [menuKeys.projects.budget];
    default:
      return [menuKeys.home];
  }
}

function getOpenKeys(locationPath: string) {
  switch (locationPath) {
    case paths.projectsPaths.overview:
    case paths.projectsPaths.thisPortfolio:
    case paths.projectsPaths.previousPortfolio:
    case paths.projectsPaths.budget:
      return [menuKeys.subMenus.projects];
    default:
      return [];
  }
}
