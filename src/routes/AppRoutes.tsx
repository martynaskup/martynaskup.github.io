import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import NoRouteMatch from '../pages/NoRouteMatch';
import AppLayout from '../components/mainLayout/AppLayout';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout />}
        children={[
          <Route index element={<Home />} />,
          <Route path="/about" element={<About />} />,
          <Route path="*" element={<NoRouteMatch />} />,
        ]}
      />
    </Routes>
  );
}
