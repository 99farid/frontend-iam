import { TransactionsOut } from "./transactions-out"

export class TransactionsIn {
    code!: string
    transactionOut! : TransactionsOut
    checkInDate! : Date
}