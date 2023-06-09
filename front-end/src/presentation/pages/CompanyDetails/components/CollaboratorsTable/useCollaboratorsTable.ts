import { useMutation } from 'react-query';
import { deleteUserMutation } from '../../../../../data/queries/user/user.mutations';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { IUseCollaboratorsParamsType } from './CollaboratorsTable.types';
import { useAuth } from '../../../../../data/store/slices/useAuth';

export function useCollaboratorsTable({
  refetch
}: IUseCollaboratorsParamsType) {
  const { user, logout } = useAuth();
  const deleteUserUseMutation = useMutation(
    deleteUserMutation.key,
    async (id: number) => {
      return await deleteUserMutation.mutation(id).then(() => {
        if (user.id === id) logout();
      });
    },
    {
      onSuccess: () => {
        refetch();
        toast.success('Usuario apagado com sucesso!');
      },
      onError: () => {
        toast.error('Erro interno ao apagar usuário!');
      }
    }
  );

  function deleteUser(id: number) {
    return () => {
      confirmAlert({
        title: 'Apagar usuário?',
        message: 'Essa ação é irreversível!',
        closeOnClickOutside: true,
        buttons: [
          {
            label: 'Confirmar',
            className: 'confirm_delete',
            onClick: () => deleteUserUseMutation.mutate(id)
          },
          {
            className: 'cancel_delete',
            label: 'Cancelar'
          }
        ]
      });
    };
  }

  return { deleteUser };
}
