import { Container } from './HeaderComponent.styles';
import { IHeaderProps } from './HeaderComponent.types';
import logo from '../../../shared/assets/logo_sx.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../data/store/slices/useAuth';
import { Button } from '..';
import { RiLogoutBoxLine } from 'react-icons/ri';

export function Header({ isLogged }: IHeaderProps): JSX.Element {
  const { user, logout } = useAuth();

  return (
    <>
      {isLogged ? (
        <Container>
          <Link to={'/'}>
            <img src={logo} />
          </Link>

          <ul>
            <li>Olá, {user.name}!</li>
            <li>
              <Button
                onClick={() => logout()}
                icon={<RiLogoutBoxLine />}
                customButton={{
                  backgroundColor: 'white',
                  color: 'secondary'
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        </Container>
      ) : (
        ''
      )}
    </>
  );
}
