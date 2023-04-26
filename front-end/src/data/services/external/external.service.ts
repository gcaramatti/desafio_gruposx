import axios from 'axios';

import getAddressByPostalCodeMapper from './mappers/getAddressByPostalCode.mapper';

import {
  IAddress,
  type IGetAddressByPostalCodeMappePayload,
  type IPersistenceAddress
} from './externalService.types';

class ExternalService {
  async getAddresByPostalCode({
    cep
  }: IGetAddressByPostalCodeMappePayload): Promise<IAddress> {
    const { data } = await axios.get<IPersistenceAddress>(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    return getAddressByPostalCodeMapper.toDomain(data);
  }
}

export default new ExternalService();
