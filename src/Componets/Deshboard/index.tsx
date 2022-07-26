import { TransactionsTable } from "../TransactionsTable"
import { Summary } from "../Summary"

import { Container } from "./styles"

export function Deshboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}