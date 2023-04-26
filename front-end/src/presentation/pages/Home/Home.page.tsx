import { Button, CardDetails, Modal } from '../../components';
import { ActionButtons, Container, Content } from './HomePage.styles';
import { useHomePage } from './useHomePage';
import { RiBuildingLine, RiUserAddLine } from 'react-icons/ri';

export function HomePage(): JSX.Element {
  const { modalOpen, setModalOpen, allCompanies } = useHomePage();

  return (
    <Container>
      <ActionButtons>
        <Button
          onClick={() => setModalOpen('createCompany')}
          icon={<RiBuildingLine />}
        >
          Nova empresa
        </Button>

        <Button
          onClick={() => setModalOpen('createUser')}
          icon={<RiUserAddLine />}
        >
          Novo funcionário
        </Button>
      </ActionButtons>

      <Content>
        {allCompanies ? (
          <CardDetails>
            {allCompanies.map(value => (
              <div key={value.id}>
                <h2>Empresa n°: {value.id}</h2>
                <p>Razão Social: {value.socialName}</p>
                <p>CNPJ: {value.cnpj}</p>
                <p>E-mail: {value.email}</p>
                <p>Contato: {value.phoneNumber}</p>

                <Button>Detalhes</Button>
              </div>
            ))}
          </CardDetails>
        ) : (
          <p>Nada encontrado</p>
        )}
      </Content>

      <Modal
        isOpen={modalOpen === 'createCompany'}
        onClose={() => setModalOpen('closed')}
      >
        Oi porra
      </Modal>

      <Modal
        isOpen={modalOpen === 'createUser'}
        onClose={() => setModalOpen('closed')}
      >
        Olá cachorro
      </Modal>
    </Container>
  );
}
