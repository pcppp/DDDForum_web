import Index from '../pages/Login/Index';
import Home from '../pages/Home/Home';
const router = [
  {
    path: '/login',
    element: <Index />,
  },
  {
    path: '/',
    element: <Home />,
  },
];
export default router;
