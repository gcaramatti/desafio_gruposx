import { IAddress, type IPersistenceAddress } from '../externalService.types';

class GetAddressByPostalCodeMapper {
  toDomain(persistenceAddress: IPersistenceAddress): IAddress {
    return {
      postalCode: persistenceAddress.cep,
      street: persistenceAddress.logradouro,
      complement: persistenceAddress.complemento,
      neighborhood: persistenceAddress.bairro,
      state: persistenceAddress.uf,
      city: persistenceAddress.localidade
    };
  }
}

export default new GetAddressByPostalCodeMapper();
