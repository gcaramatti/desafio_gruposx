import { Link } from 'react-router-dom';
import { ActionButtons } from '../Home/HomePage.styles';
import {
  CardUserData,
  Container,
  Content,
  FormActionButtons
} from './userDetailsPage.styles';
import { Button, InputText, Select } from '../../components';
import { RiEditLine, RiHome3Line } from 'react-icons/ri';
import { useUserDetails } from './useUserDetails';

export function UserDetails(): JSX.Element {
  const { disabled, setDisabled, editUserForm } = useUserDetails();
  const selectCompanyOptions =
    localStorage.getItem('selectCompanyOptions') !== null
      ? JSON.parse(localStorage.getItem('selectCompanyOptions') as string)
      : [];

  return (
    <Container>
      <ActionButtons>
        <Link to={'/'}>
          <Button type='button' icon={<RiHome3Line />}>
            Ir para Home
          </Button>
        </Link>
      </ActionButtons>

      <Content>
        <CardUserData>
          <Button
            icon={<RiEditLine />}
            type='button'
            onClick={() => setDisabled(!disabled)}
          >
            Editar usuário
          </Button>

          <h3>Editar usuário</h3>

          <form>
            <InputText
              disabled={disabled}
              name={'name'}
              control={editUserForm.control}
              placeholder='Nome'
            />

            <InputText
              disabled={disabled}
              name={'cpf'}
              control={editUserForm.control}
              placeholder='CPF'
              mask='cpf'
            />

            <Select
              disabled={disabled}
              name='companyId'
              options={selectCompanyOptions}
              control={editUserForm.control}
              placeholder='Empresa'
            />

            <InputText
              disabled={disabled}
              name={'email'}
              control={editUserForm.control}
              placeholder='E-mail'
            />

            <InputText
              disabled={disabled}
              name={'phoneNumber'}
              control={editUserForm.control}
              placeholder='Telefone + DDD'
              mask='phone'
            />

            <InputText
              disabled={disabled}
              name={'postalCode'}
              control={editUserForm.control}
              placeholder='CEP'
              mask='cep'
              //onBlur={onBlur}
            />

            <InputText
              disabled={disabled}
              name={'state'}
              control={editUserForm.control}
              placeholder='Estado'
            />

            <InputText
              disabled={disabled}
              name={'street'}
              control={editUserForm.control}
              placeholder='Rua'
            />

            <InputText
              disabled={disabled}
              name={'neighborhood'}
              control={editUserForm.control}
              placeholder='Bairro'
            />

            <InputText
              disabled={disabled}
              name={'number'}
              control={editUserForm.control}
              placeholder='Número'
            />

            {!disabled && (
              <FormActionButtons>
                <Button>Salvar</Button>
                <Button
                  type='button'
                  onClick={() => setDisabled(!disabled)}
                  customButton={{ backgroundColor: 'danger', color: 'white' }}
                >
                  Cancelar
                </Button>
              </FormActionButtons>
            )}
          </form>
        </CardUserData>
      </Content>
    </Container>
  );
}
