import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

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
