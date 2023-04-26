import ExternalService from '../../services/external/external.service';
import { IAddress } from '../../services/external/externalService.types';

export const getAddresByPostalCodeQuery = {
  key: ['getAddresByPostalCode'],
  query: async (cep: string): Promise<IAddress> => {
    return await ExternalService.getAddresByPostalCode(cep);
  }
};
