import { Card } from './CardDetailsComponent.styles';
import { ICardDetailsProps } from './CardDetailsComponent.types';

export function CardDetails({ children }: ICardDetailsProps): JSX.Element {
  return <Card>{children}</Card>;
}
