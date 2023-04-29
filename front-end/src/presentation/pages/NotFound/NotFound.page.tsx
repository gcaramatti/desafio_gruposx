import { Link } from 'react-router-dom';
import { Container, Content } from './NotFound.styles';
import { Button } from '../../components';

export function NotFoundPage(): JSX.Element {
  return (
    <Container>
      <Content>
        <h1>404.</h1>
        <p>Página não encontrada!</p>

        <Link to='/'>
          <Button>Voltar para Home</Button>
        </Link>
      </Content>
    </Container>
  );
}
