import { Link } from 'react-router-dom';
import { Button, InputText } from '../../components';
import { RiHome3Line, RiEditLine } from 'react-icons/ri';
import {
  ActionButtons,
  CompanyData,
  Container,
  Content
} from './CompanyDetailsPage.styles';
import { useCompanyDetails } from './useCompanyDetails';
import { EditCompanyForm } from './EditCompanyForm/EditCompanyForm.component';

export function CompanyDetailsPage(): JSX.Element {
  const { data, editCompanyForm } = useCompanyDetails();

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
      </Content>
    </Container>
  );
}
