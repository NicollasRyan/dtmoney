import Modal from 'react-modal'

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal ({ isOpen, onRequestClose }: NewTrasactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
        <h2>Cadastrar transação</h2>
      </Modal>
    )
}