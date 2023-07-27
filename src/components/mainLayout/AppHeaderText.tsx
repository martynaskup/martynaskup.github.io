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
        return 'About Me';
      case paths.contactMe:
        return 'Contact Information';
      case paths.projectsPaths.overview:
        return 'Projects Overview';
      case paths.projectsPaths.previousPortfolio:
        return 'My Previous Portfolio';
      case paths.projectsPaths.budget:
        return 'Budget App';
      case paths.base:
      case paths.home:
        return 'Hello and Welcome to My Website!';
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
