import { Assets } from "./assets";
import { BaseEntity } from "./base-entity";
import { Employees } from "./employees";
import { Locations } from "./locations";

export class TransactionsOut extends BaseEntity {

    code!: string
    employee?: Employees
    location?: Locations
    generalItem?: Assets
    checkOutDate!: string
}