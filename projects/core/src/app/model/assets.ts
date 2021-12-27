import { Items } from '../model/items';
import { StatusAssets } from '../model/status-assets';
import { Companies } from '../model/companies';
import { Invoices } from '../model/invoices';
import { BaseEntity } from '../model/base-entity';
import { Files } from './files';

export class Assets extends BaseEntity{
    code!:string;
	item!:Items;
	statusAsset! : StatusAssets;
    company! : Companies;
    invoice! : Invoices;
	expiredDate! : Date;
    display! : Files;
}