import styled from 'styled-components';

export const CompanyData = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  width: 80%;
  padding: 2rem 4rem;
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

export const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
`;
