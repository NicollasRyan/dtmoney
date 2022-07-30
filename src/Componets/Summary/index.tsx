import { useContext } from 'react';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'
import { TransactionsContext } from '../../transactionsContext';

import { Conatiner } from "./styles";

export function Summary() {
    const transactions = useContext(TransactionsContext);

    console.log(transactions)
    

    return (
        <Conatiner>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="heghlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Conatiner>
    )
}