import { Link } from 'react-router-dom';
import { Button, Loader } from '../../components';
import { RiHome3Line } from 'react-icons/ri';
import {
  ActionButtons,
  CompanyData,
  Container,
  Content
} from './CompanyDetailsPage.styles';
import { useCompanyDetails } from './useCompanyDetails';
import { EditCompanyForm } from './components/EditCompanyForm/EditCompanyForm.component';
import { CollaboratorsTable } from './components/CollaboratorsTable/CollaboratorsTable.component';

export function CompanyDetailsPage(): JSX.Element {
  const { data, editCompanyForm, isLoading, refetch } = useCompanyDetails();

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
        <EditCompanyForm
          companyData={data?.company}
          disabled={editCompanyForm.disabledCompanyButton}
          setDisabled={editCompanyForm.setDisabledCompanyButton}
        />

        <CompanyData>
          <CollaboratorsTable userData={data?.user} refetch={refetch} />
        </CompanyData>
      </Content>

      <Loader isLoading={isLoading} />
    </Container>
  );
}
