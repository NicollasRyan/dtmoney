import Modal from 'react-modal'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeConatainer } from "./styles"

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal ({ isOpen, onRequestClose }: NewTrasactionModalProps) {
    return (
        <Modal 
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
        >

            <button 
             type="button" 
             onClick={onRequestClose} 
             className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                 placeholder='Título' 
                />

                <input 
                 type='number' 
                 placeholder='valor'
                 />

                <TransactionTypeConatainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeConatainer>

                <input 
                 placeholder='Categoria' 
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
      </Modal>
    )
}