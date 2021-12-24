import { BaseEntity } from "./base-entity";
import { Companies } from "./companies";

export class Employees extends BaseEntity {

    company!: Companies
    nip!: string
    fullName!: string
    phoneNo!: string
    department!: string
    email!: string
}