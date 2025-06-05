import { Button } from '@mui/material';
import { useUser } from '../contents/userProvider';
// import { FaUserCircle, FaComments, FaBars } from 'react-icons/fa';

function Header() {
  const { user, isLoggedIn, clearUser } = useUser();

  const handleLogout = () => {
    clearUser();
  };

  return (
    <header className="h-full  shadow-lg sticky top-0 z-50">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex justify-between items-center ">
          {/* 左侧 - 论坛logo和名称 */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div>
                <h1 className="text-2xl font-bold text-black tracking-tight">
                  DDD<span className="text-amber-700">FORUM</span>
                </h1>
                <p className="text-1xl text-amber-500 -mt-1">
                  Domain Driven Design
                </p>
              </div>
            </div>
          </div>

          {/* 右侧 - 用户信息 */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <Button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-3 py-2 transition-all duration-200">
                  {/* <FaUserCircle className="h-6 w-6 text-white" /> */}
                </Button>

                <Button className="m-4">
                  <span className="text-amber-700 text-2xl font-medium hidden sm:block">
                    {user?.username || user?.firstName}
                  </span>
                </Button>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <a
                  href="/login"
                  className="text-amber-600 hover:text-yellow-300 transition-colors duration-200 font-medium">
                  登录
                </a>
                <a
                  href="/register"
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                  注册
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
