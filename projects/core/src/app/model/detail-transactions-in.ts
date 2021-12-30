import { Assets } from "./assets";
import { ConditionAssets } from "./condition-assets";
import { TransactionsIn } from "./transactions-in";

export class DetailTransactionsIn {
    transactionIn! : TransactionsIn
    asset! : Assets
    conditionAsset! : ConditionAssets
}