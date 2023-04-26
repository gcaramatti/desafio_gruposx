import styled from 'styled-components';

export const FooterButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  row-gap: 1rem;
  background-color: ${({ theme }) => theme.colors.alabaster};
  padding: 1rem 2rem;
`;

export const Container = styled.div`
  padding: 2rem;
`;
