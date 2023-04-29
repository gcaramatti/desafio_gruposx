export interface IModalCreateUserCompany {
  isLoading: boolean;
  modal: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    setModalOpen: React.Dispatch<React.SetStateAction<'user' | 'closed'>>;
  };
}
