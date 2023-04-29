import { Card } from './CardDetails.styles';
import { ICardDetailsProps } from './CardDetails.types';

export function CardDetails({ children }: ICardDetailsProps): JSX.Element {
  return <Card>{children}</Card>;
}
