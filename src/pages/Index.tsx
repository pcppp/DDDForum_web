import { BrowserRouter, useRoutes } from 'react-router';
import router from '../router/router.tsx';
import Header from './Header.tsx';
import { Toaster } from 'sonner';
import { UserProvider } from '../contents/userProvider.tsx';
// 在你的主题配置文件或 App.tsx 中
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
function Routes() {
  const element = useRoutes(router);
  return element;
}
function Index() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          {/* 使用 flex 布局更好地控制高度 */}
          <div className="h-screen w-screen flex flex-col">
            {/* Header 区域 */}
            <div className="h-16 bg-amber-100 flex-shrink-0">
              <Header />
            </div>

            {/* 主内容区域 - 自动占满剩余空间并可滚动 */}
            <div className="flex-1 p-4 bg-amber-200 min-h-0" id="container">
              <Toaster richColors position="top-right" />
              <Routes />
            </div>
          </div>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Index;
