import { Assets } from "./assets";
import { BaseEntity } from "./base-entity";
import { TransactionsOut } from "./transactions-out";

export class DetailTransactionsOut extends BaseEntity {

    transactionOut!: TransactionsOut
    asset!: Assets
    dueDate!: string
}