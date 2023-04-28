import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 6rem 1rem;

  > div:first-child {
    justify-content: end;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const CardUserData = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  width: 80%;
  padding: 2rem;
  border-radius: 0.7rem;
  font-size: 1.5rem;

  > button:first-child {
    float: right;
  }

  > form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 2rem;
  }

  @media screen and (max-width: 700px) {
    > form {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const FormActionButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
