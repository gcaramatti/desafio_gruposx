import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 6rem 1rem;
`;

export const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
`;

export const Content = styled.div`
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
`;
