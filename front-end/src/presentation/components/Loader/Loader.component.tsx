import { Container } from './LoaderComponent.styles';
import { StyledSpinner } from './LoaderComponent.styles';
import { ILoaderProps } from './LoaderComponent.types';

export function Loader({
  isLoading = false
}: ILoaderProps): JSX.Element | null {
  if (!isLoading) {
    return null;
  }

  return (
    <Container>
      <StyledSpinner />

      <p>Carregando</p>
    </Container>
  );
}
