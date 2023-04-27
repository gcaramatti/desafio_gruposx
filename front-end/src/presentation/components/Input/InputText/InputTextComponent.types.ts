import { InputHTMLAttributes, ReactNode } from 'react';
import { type Control, type FieldValues } from 'react-hook-form';
import { MaskType } from '../../../../shared/utils/masks/maskUtil.types';

export interface IInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<T>;
  defaultValue?: string;
  mask?: MaskType;
  type?: 'text' | 'password';
  placeholder: string;
  errorMessage?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export type InputTextStylesType = Pick<IInputProps<FieldValues>, 'icon'>;
