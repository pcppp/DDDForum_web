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
      <UserProvider>
        <div className="h-[8vh] w-[100vw] bg-amber-100">
          <Toaster richColors position="top-right" />
          <Header></Header>
        </div>
        <div className="h-[92vh] w-[100vw] p-4 bg-amber-200">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default Index;
