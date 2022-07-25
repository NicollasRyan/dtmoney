import { useState } from 'react';
import Modal from 'react-modal'
import { Deshboard } from "./Componets/Deshboard"
import { Header } from "./Componets/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')


export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

    function handleOpenNewTrasactionModal() {
        setIsNewTrasactionModalOpen(true);
    }

    function handleCloseNewTrasactionModal() {
        setIsNewTrasactionModalOpen(false)
    }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
      <Deshboard />

      <Modal 
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
                >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}