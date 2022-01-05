import { BaseEntity } from "./base-entity";

export class Permissions extends BaseEntity {

    code!: string
    permissionName!: string
    permissionLink!: string
}