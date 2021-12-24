import { ItemTypes } from '../model/item-types';
import { BaseEntity } from './base-entity';
export class Items extends BaseEntity{
    description!:string;
	itemType!:ItemTypes;
	brand!:string;
	serial!:string;
    price!:number;
}