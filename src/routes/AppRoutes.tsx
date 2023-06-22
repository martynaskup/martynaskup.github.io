import { Route, Routes } from 'react-router-dom';
import About from '../pages/AboutPage/About';
import NoRouteMatch from '../pages/NoRouteMatch';
import AppLayout from '../components/mainLayout/AppLayout';
import Home from '../pages/Home';
import ContactInfo from '../pages/ContactInfo';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AppLayout />}
        children={[
          <Route index element={<Home />} key="home" />,
          <Route path="/about" element={<About />} key="about" />,
          <Route
            path="/contactMe"
            element={<ContactInfo />}
            key="contactInfo"
          />,
          <Route path="*" element={<NoRouteMatch />} key="noMatch" />,
        ]}
      />
    </Routes>
  );
}
