import { BaseEntity } from "./base-entity";

export class Invoices extends BaseEntity{
    code!:string;
    purchaseDate!:Date;
    totalPrice!:number;
    invoicePict!:Invoices;
}