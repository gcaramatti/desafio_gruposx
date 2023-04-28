import { DefaultThemeType } from './defaultTheme.types';

export const defaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    chineseSilver: '#73837e',
    primary: '#2b2b2b',
    secondary: '#00c690',
    alabaster: '#f6f5ef',
    quartz: '#4c4c4cbf',
    danger: '#bb2124',
    jade: '#00523b',
    transparent: 'transparent',
    success: '#408140',
    softGray: '#a4a4a4bf'
  }
};

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
