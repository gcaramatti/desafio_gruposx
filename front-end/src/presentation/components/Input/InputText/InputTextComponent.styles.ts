import styled from 'styled-components';
import { InputTextStylesType } from './InputTextComponent.types';

export const Container = styled.div<InputTextStylesType>`
  width: 100%;
  display: flex;
  align-items: ${({ icon }) => (icon ? 'center' : 'flex-start')};
  flex-direction: ${({ icon }) => (icon ? 'row' : 'column')};
  gap: 1rem;

  > label {
    margin: 0;
  }

  > span {
    font-size: 1.6rem;
  }
`;

export const StyledInput = styled.input`
  padding: 1rem 0;
  border: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.chineseSilver};
  background: transparent;
  width: 100%;
`;

export const ErrorMessage = styled.label`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.danger};
  margin: 0;
  padding: 0;
`;
