import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/fight',
    element: <FightPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
