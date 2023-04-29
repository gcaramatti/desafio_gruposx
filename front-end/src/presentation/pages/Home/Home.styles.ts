import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 6rem 1rem;
`;

export const ActionButtons = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
