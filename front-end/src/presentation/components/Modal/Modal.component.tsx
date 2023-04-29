import ReactModal from 'react-modal';
import { IModalProps } from './Modal.types';
import { Button } from '..';
import { Container, FooterButtons, FormContainer, Title } from './Modal.styles';

export function Modal({
  isOpen,
  onClose,
  children,
  onSubmit = undefined,
  title
}: IModalProps): JSX.Element {
  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <Title>
        <h2>{title}</h2>
      </Title>
      {onSubmit ? (
        <form onSubmit={onSubmit}>
          <FormContainer>{children}</FormContainer>

          <FooterButtons>
            <Button type='submit'>Salvar</Button>

            <Button
              onClick={onClose}
              customButton={{
                backgroundColor: 'danger',
                color: 'white'
              }}
              type='button'
            >
              Fechar
            </Button>
          </FooterButtons>
        </form>
      ) : (
        <>
          <Container>{children}</Container>

          <FooterButtons>
            <Button
              onClick={onClose}
              customButton={{
                backgroundColor: 'danger',
                color: 'white'
              }}
            >
              Fechar
            </Button>
          </FooterButtons>
        </>
      )}
    </ReactModal>
  );
}
