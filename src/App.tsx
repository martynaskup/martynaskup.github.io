import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const router = createBrowserRouter(routes, {
    basename: process.env.PUBLIC_URL,
  });

  return <RouterProvider router={router} />;
}

export default App;
