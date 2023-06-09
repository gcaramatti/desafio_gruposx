import { Routes, Route } from 'react-router-dom';
import {
  NotFoundPage,
  LoginPage,
  HomePage,
  CompanyDetailsPage,
  UserDetails
} from '../../presentation/pages';
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
        <Route
          path='/company/:companyId'
          element={
            <ConditionalRoute condition={isLogged} redirectTo='/login'>
              <CompanyDetailsPage />
            </ConditionalRoute>
          }
        />
        <Route
          path='/user/:userId'
          element={
            <ConditionalRoute condition={isLogged} redirectTo='/login'>
              <UserDetails />
            </ConditionalRoute>
          }
        />
      </Routes>
    </>
  );
}
