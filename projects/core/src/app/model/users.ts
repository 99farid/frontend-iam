import { BaseEntity } from "./base-entity";
import { Roles } from "./roles";

export class Users extends BaseEntity{

    role!: Roles
    email!: string
    pass!: string
}