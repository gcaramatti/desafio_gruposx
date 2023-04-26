import ReactModal from 'react-modal';
import { IModalProps } from './ModalComponent.types';
import { Button } from '..';
import { Container, FooterButtons } from './ModalComponent.styles';

export function Modal({
  isOpen,
  onClose,
  children,
  onSubmit = undefined
}: IModalProps): JSX.Element {
  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      {onSubmit ? (
        <form onSubmit={onSubmit}>
          <Container>{children}</Container>

          <FooterButtons>
            <Button type='submit'>Salvar</Button>

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
