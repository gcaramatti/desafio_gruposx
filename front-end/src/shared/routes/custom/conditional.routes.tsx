import { Navigate } from 'react-router-dom';
import { ConditionalRouteProps } from './conditionalRoutes.types';

export default function ConditionalRoute({
  condition,
  redirectTo,
  children
}: ConditionalRouteProps): JSX.Element {
  return condition ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
}
