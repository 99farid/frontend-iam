import { InsertReqInvoicesDto } from "./insert-req-invoices-dto";
import { InsertReqItemsDto } from "./insert-req-items-dto";

export class InsertReqAssetDto{
    code!:string;
    item!:InsertReqItemsDto;
	idStatusAsset!:string;
	idCompany!:string;
	invoice!:InsertReqInvoicesDto;
	expiredDate!:string;
}