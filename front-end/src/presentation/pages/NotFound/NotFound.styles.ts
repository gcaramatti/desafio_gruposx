import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  > h1 {
    font-size: 20rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
  }
`;
