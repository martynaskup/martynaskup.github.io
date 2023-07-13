import { Outlet } from 'react-router-dom';
import { StyledAppContent } from './MainLayout.styles';

function AppContent() {
  return (
    <StyledAppContent>
      <Outlet />
    </StyledAppContent>
  );
}

export default AppContent;
