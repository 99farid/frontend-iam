import { BaseEntity } from "./base-entity";
import { Permissions } from "./permissions";
import { Roles } from "./roles";

export class RolePermissions extends BaseEntity {

    role!: Roles
    permission!: Permissions
}