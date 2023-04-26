import { IButtonProps } from './ButtonComponent.types';
import { Container } from './ButtonComponent.styles';

export function Button({
  children,
  type = 'submit',
  onClick,
  customButton,
  icon
}: IButtonProps): JSX.Element {
  return (
    <Container type={type} onClick={onClick} customButton={customButton}>
      {icon && <>{icon}</>}
      {children}
    </Container>
  );
}
