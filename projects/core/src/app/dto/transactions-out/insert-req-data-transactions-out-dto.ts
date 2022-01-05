import { InsertReqDataDetailTransactionsOutDto } from "./insert-req-data-detail-transactions-out-dto"

export class InsertReqDataTransactionsOutDto {

    idEmployee?: string 
	idLocation?: string
	idGeneralItem?: string
	checkOutDate!: string
    dataDetail!: InsertReqDataDetailTransactionsOutDto[]
	isActive!: boolean
}