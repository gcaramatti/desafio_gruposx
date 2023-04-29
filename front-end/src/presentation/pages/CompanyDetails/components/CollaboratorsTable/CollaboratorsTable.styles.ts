import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  overflow-x: auto;

  > h3 {
    padding: 0 0 4rem 0;
  }
`;

export const UserTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;

  th,
  td {
    text-align: left;
    padding: 8px;
    min-width: 90px;
  }

  > thead > tr > th {
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  > thead {
    border-top-left-radius: 0.7rem;
    background-color: ${({ theme }) => theme.colors.softGray};
    color: ${({ theme }) => theme.colors.black};
  }

  > tbody {
    border: 1px solid ${({ theme }) => theme.colors.black};

    > tr > td {
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export const TdActionButtons = styled.td`
  display: flex;
  gap: 1rem;
  margin: 0;
`;
