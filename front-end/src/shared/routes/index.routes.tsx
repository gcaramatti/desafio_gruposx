import { Routes, Route } from 'react-router-dom';
import { NotFoundPage, LoginPage, HomePage } from '../../presentation/pages';
import ConditionalRoute from './custom/conditional.routes';
import { useAuth } from '../../data/store/slices/useAuth';
import { Header } from '../../presentation/components';

export function AppRoutes() {
  const { isLogged } = useAuth();

  return (
    <>
      <Header isLogged={isLogged} />
      <Routes>
        <Route path='*' element={<NotFoundPage />} />

        <Route
          path='/login'
          element={
            <ConditionalRoute condition={!isLogged} redirectTo='/'>
              <LoginPage />
            </ConditionalRoute>
          }
        />

        <Route
          path='/'
          element={
            <ConditionalRoute condition={isLogged} redirectTo='/login'>
              <HomePage />
            </ConditionalRoute>
          }
        />
      </Routes>
    </>
  );
}
