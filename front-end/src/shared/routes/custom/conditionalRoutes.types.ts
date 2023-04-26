import { ReactNode } from 'react';

export type ConditionalRouteProps = {
  condition: boolean;
  redirectTo: string;
  children?: ReactNode;
};
