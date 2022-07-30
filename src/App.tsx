import { useState } from "react";
import Modal from 'react-modal'
import { TransactionsProvider } from "./hooks/useTransactions";
import { Deshboard } from "./Componets/Deshboard"
import { Header } from "./Componets/Header";
import { GlobalStyle } from "./styles/global";
import { NewTrasactionModal } from './Componets/NewTransactionModal'

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
      <Deshboard />

      <NewTrasactionModal 
          isOpen={isNewTrasactionModalOpen}
          onRequestClose={handleCloseNewTrasactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}