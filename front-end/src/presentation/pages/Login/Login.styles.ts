import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
`;

export const Card = styled.div`
  border-radius: 0.3rem;
  width: 70rem;
  max-width: 70rem;
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.colors.chineseSilver};
  display: flex;
  background-color: ${({ theme }) => theme.colors.alabaster};

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 90%;

    > div {
      padding: 5rem 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;

  > h1 {
    text-align: center;
  }
`;

export const Secondary = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.2rem;
`;
