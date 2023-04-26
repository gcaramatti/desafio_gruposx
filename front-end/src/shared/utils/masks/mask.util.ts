import { MaskType } from './maskUtil.types';

class Mask {
  apply(mask?: MaskType, value?: string | null): string {
    if (!value || value === null) {
      return '';
    }

    switch (mask) {
      case 'phone':
        if (value.length > 16) {
          return value.slice(0, -1);
        }

        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/^(\d{2})\B/, '($1) ')
          .replace(/(\d{1})?(\d{4})(\d{4})/, '$1 $2-$3');

      case 'cpf':
        if (value.length > 14) {
          return value.slice(0, -1);
        }

        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/^(\d{3})\B/, '$1.')
          .replace(/(\d{3})\B/, '$1.')
          .replace(/(\d{3})\B/, '$1-')
          .replace(/(\d{2})\B/, '$1');

      case 'cep':
        if (value.length > 9) {
          return value.slice(0, -1);
        }

        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/^(\d{5})\B/, '$1-')
          .replace(/(\d{3})\B/, '$1');

      case 'cnpj':
        if (value.length > 18) {
          return value.slice(0, -1);
        }

        return value
          .toString()
          .replace(/\D/g, '')
          .replace(/^(\d{2})\B/, '$1.')
          .replace(/(\d{3})\B/, '$1.')
          .replace(/(\d{3})\B/, '$1/')
          .replace(/(\d{4})\B/, '$1-')
          .replace(/(\d{2})\B/, '$1');

      default:
        return value;
    }
  }

  remove(value: string): string {
    if (!value) return '';

    return value.toString().replace(/\D/g, '');
  }
}

export default new Mask();
