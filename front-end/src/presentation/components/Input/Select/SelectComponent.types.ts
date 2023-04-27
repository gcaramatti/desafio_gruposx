import { Control } from 'react-hook-form';

export interface ISelectProps {
  name: string;
  placeholder: string;
  control: Control<any>;
  options: { label: string; value: string | number }[];
}

export interface ISelectOption {
  value: string;
  label: string;
}
