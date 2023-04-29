import { Link } from 'react-router-dom';
import { Button, CardDetails, Loader, Modal } from '../../components';
import { ActionButtons, Container, Content } from './Home.styles';
import { useHomePage } from './useHomePage';
import { RiBuildingLine, RiUserAddLine, RiEyeLine } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CreateCompanyForm } from './components/CreateCompanyForm/CreateCompanyForm.component';
import { CreateUserForm } from './components/CreateUserForm/CreateUserForm.component';

export function HomePage(): JSX.Element {
  const {
    modalOpen,
    setModalOpen,
    allCompanies,
    createCompanyForm,
    createUserForm,
    isLoading,
    onClickDeleteCompany
  } = useHomePage();

  return (
    <Container>
      <Loader isLoading={isLoading} />

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
          <>
            {allCompanies.map(value => (
              <CardDetails key={value.id}>
                <h2>Empresa n°: {value.id}</h2>

                <p>
                  <strong>Razão Social:</strong> {value.socialName}
                </p>

                <p>
                  <strong>CNPJ:</strong> {value.cnpj}
                </p>

                <p>
                  <strong>E-mail:</strong> {value.email}
                </p>

                <p>
                  <strong>Contato:</strong> {value.phoneNumber}
                </p>

                <ActionButtons>
                  <Link to={`/company/${value.id}`}>
                    <Button icon={<RiEyeLine />}>Detalhes</Button>
                  </Link>

                  <Button
                    customButton={{
                      backgroundColor: 'danger',
                      color: 'white'
                    }}
                    icon={<RiDeleteBin6Line />}
                    onClick={onClickDeleteCompany(value.id)}
                  >
                    Apagar empresa
                  </Button>
                </ActionButtons>
              </CardDetails>
            ))}
          </>
        ) : (
          <p>Nada encontrado</p>
        )}
      </Content>

      <Modal
        isOpen={modalOpen === 'createCompany'}
        onClose={() => setModalOpen('closed')}
        title='Cadastrar empresa'
        onSubmit={createCompanyForm.createCompanyFormSubmit()}
      >
        <CreateCompanyForm createCompanyForm={createCompanyForm} />
      </Modal>

      <Modal
        isOpen={modalOpen === 'createUser'}
        onClose={() => setModalOpen('closed')}
        title='Cadastrar funcionário'
        onSubmit={createUserForm.createUserFormSubmit()}
      >
        <CreateUserForm
          createUserForm={createUserForm}
          companyList={allCompanies}
        />
      </Modal>
    </Container>
  );
}
