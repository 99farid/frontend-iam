import { BaseEntity } from "./base-entity"
import { Companies } from "./companies"

export class Locations extends BaseEntity {

    code!: string
    company!: Companies
    locationName!: string
}