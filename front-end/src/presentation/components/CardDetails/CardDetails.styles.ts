import styled from 'styled-components';

export const Card = styled.div`
  border: 0;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.alabaster};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 35rem;
`;
