import { DefaultThemeType } from './defaultTheme.types';

export const defaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    chineseSilver: '#c9c9c9',
    primary: '#2b2b2b',
    secondary: '#00c690',
    alabaster: '#f6f5ef',
    quartz: '#4c4c4cbf',
    danger: '#bb2124',
    jade: '#00523b',
    transparent: 'transparent'
  }
};

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
