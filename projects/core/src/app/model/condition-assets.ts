import { BaseEntity } from "./base-entity";
import { StatusAssets } from "./status-assets";

export class ConditionAssets extends BaseEntity{
	code!:string
	statusAsset!:StatusAssets;
	conditionAssetName!:string;
}