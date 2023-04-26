import { ReactNode } from 'react';
import { DefaultColorsType } from '../../../shared/global/global.types';

export interface IButtonProps {
  icon?: ReactNode;
  customButton?: {
    color: DefaultColorsType;
    backgroundColor: DefaultColorsType;
  };
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

export type ButtonStylesType = Pick<IButtonProps, 'customButton'>;
