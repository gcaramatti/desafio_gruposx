import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters
} from 'react-query';
import { IUser } from '../../../../../data/services/auth/userService.types';
import { IGetCompanyDetails } from '../../../../../data/services/company/companyService.types';

export interface ICollaboratorsTableProps {
  userData?: IUser[];
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IGetCompanyDetails, unknown>>;
}

export type IUseCollaboratorsParamsType = Pick<
  ICollaboratorsTableProps,
  'refetch'
>;
