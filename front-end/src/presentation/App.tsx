import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from '../shared/routes/index.routes';
import { GlobalStyles } from '../shared/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../shared/styles/themes/default.theme';
import { Provider } from 'react-redux';
import store from '../data/store/store';
import { ToastComponent } from './components';
import { LoadInitialData } from './components';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <ToastComponent />

          <BrowserRouter>
            <LoadInitialData />
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
