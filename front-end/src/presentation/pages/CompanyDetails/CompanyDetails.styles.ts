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

export const CompanyData = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  width: 80%;
  padding: 2rem;
  border-radius: 0.7rem;
  font-size: 1.5rem;

  > button:first-child {
    float: right;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
`;
