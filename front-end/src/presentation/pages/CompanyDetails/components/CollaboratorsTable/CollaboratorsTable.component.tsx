import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';
import { Button } from '../../../../components';
import {
  Container,
  TdActionButtons,
  UserTable
} from './CollaboratorsTable.styles';
import { ICollaboratorsTableProps } from './CollaboratorsTable.types';
import { Link } from 'react-router-dom';
import { useCollaboratorsTable } from './useCollaboratorsTable';

export function CollaboratorsTable({
  userData,
  refetch
}: ICollaboratorsTableProps): JSX.Element {
  const { deleteUser } = useCollaboratorsTable({ refetch });

  return (
    <Container>
      <h3>Colaboradores dessa empresa:</h3>

      <UserTable>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Contato</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.length > 0 ? (
            userData.map(value => (
              <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.cpf}</td>
                <td>{value.email}</td>
                <td>{value.phoneNumber}</td>
                <TdActionButtons>
                  <Link to={`/user/${value.id}`}>
                    <Button icon={<RiEditLine />} type='button'>
                      Editar
                    </Button>
                  </Link>

                  <Button
                    icon={<RiDeleteBin6Line />}
                    type='button'
                    customButton={{
                      backgroundColor: 'danger',
                      color: 'white'
                    }}
                    onClick={deleteUser(value.id)}
                  >
                    Apagar
                  </Button>
                </TdActionButtons>
              </tr>
            ))
          ) : (
            <tr>
              <th>Nenhum colaborador encontrado</th>
            </tr>
          )}
        </tbody>
      </UserTable>
    </Container>
  );
}
