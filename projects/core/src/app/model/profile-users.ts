import { BaseEntity } from "./base-entity";
import { Employees } from "./employees";
import { Files } from "./files";
import { Users } from "./users";

export class ProfileUsers extends BaseEntity {

    user!: Users
    employee!: Employees
    profilePict?: Files
}