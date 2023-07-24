import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { useLocation } from 'react-router-dom';
import paths from '../../routes/paths';
import { Typography } from 'antd';

function AppHeaderText() {
  const { sm } = useBreakpoint();
  const appLocation = useLocation();

  function textToRender(): string {
    switch (appLocation.pathname.substring(1)) {
      case paths.about:
        return 'About me';
      case paths.contactMe:
        return 'Contact information';
      case paths.projectsPaths.overview:
        return 'My portfolio projects';
      case paths.projectsPaths.previousPortfolio:
        return 'My previous portfolio';
      case paths.projectsPaths.budget:
        return 'Budget app';
      case paths.base:
      case paths.home:
        return "Hello! I'm Martyna, React Developer. Welcome to my website!";
      default:
        return 'Hmm...';
    }
  }

  return (
    <Typography.Title level={3} style={{ fontSize: sm ? '16px' : '12px' }}>
      {textToRender()}
    </Typography.Title>
  );
}

export default AppHeaderText;
