import { TransactionsIn } from "../../model/transactions-in";
import { InsertReqDetailTransactionInDto } from "./insert-req-detail-transaction-in-dto";

export class InsertReqTransactionInDto{
    idTransactionOut! : string
    checkInDate! : Date
    detailData! :InsertReqDetailTransactionInDto[]
}