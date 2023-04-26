import { Button, InputText } from '../../components';
import { Card, Container, Form, Secondary } from './LoginPage.styles';
import { useLogin } from './useLogin';
import logo from '../../../shared/assets/logo_sx.png';
import { FieldValues } from 'react-hook-form';
import { Loader } from '../../components';
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri';

export function LoginPage(): JSX.Element {
  const { control, handleSubmit, onSubmit, isLoading, errors } = useLogin();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Card>
        <Form onSubmit={handleSubmit((data: FieldValues) => onSubmit(data))}>
          <h1>Login</h1>

          <InputText
            name='email'
            placeholder='E-mail'
            control={control}
            errorMessage={errors.email?.message}
            icon={<RiMailLine />}
          />

          <InputText
            name='password'
            placeholder='Senha'
            type={'password'}
            control={control}
            errorMessage={errors.password?.message}
            icon={<RiLockPasswordLine />}
          />

          <Button>Logar</Button>
        </Form>

        <Secondary>
          <img src={logo} />
          <h2>Ainda não tem conta?</h2>
          Registre-se aqui!
        </Secondary>
      </Card>
    </Container>
  );
}
