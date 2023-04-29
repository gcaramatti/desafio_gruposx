import { Button, InputText } from '../../components';
import { Card, Container, Form, Secondary } from './Login.styles';
import { useLogin } from './useLogin';
import logo from '../../../shared/assets/logo_sx.png';
import { Loader } from '../../components';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import { ModalCreateUserCompany } from './components/ModalCreateUserCompany.component';

export function LoginPage(): JSX.Element {
  const { control, onSubmit, isLoading, errors, modal } = useLogin();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Card>
        <Form onSubmit={onSubmit()}>
          <h1>Login</h1>

          <InputText
            name='email'
            placeholder='E-mail'
            control={control}
            errorMessage={errors.email?.message}
            icon={<RiMailLine />}
            showLabelAbove={false}
          />

          <InputText
            name='password'
            placeholder='Senha'
            type={'password'}
            control={control}
            errorMessage={errors.password?.message}
            icon={<RiLockPasswordLine />}
            showLabelAbove={false}
          />

          <Button>Logar</Button>
        </Form>

        <ModalCreateUserCompany
          modal={{
            isOpen: modal.modalOpen === 'user',
            setModalOpen: modal.setModalOpen,
            title: 'Cadastrar usuário',
            onClose: () => modal.setModalOpen('closed')
          }}
          isLoading={false}
        />

        <Secondary>
          <img src={logo} />
          <h2>Ainda não tem conta?</h2>
          <Button type='button' onClick={() => modal.setModalOpen('user')}>
            Registre-se aqui!
          </Button>
        </Secondary>
      </Card>
    </Container>
  );
}
