import Login from '../pages/Login/Login';
import Register from '@/pages/Login/Register';
import Home from '../pages/Home/Home';
const router = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />,
  },
];
export default router;
