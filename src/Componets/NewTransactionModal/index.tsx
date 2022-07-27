import Modal from 'react-modal'
import { useState } from 'react';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeConatainer, RadioBox } from "./styles"

interface NewTrasactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal ({ isOpen, onRequestClose }: NewTrasactionModalProps) {
    const [type, setType] = useState('deposit')


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
                    <RadioBox 
                        type="button" 
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button" 
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
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