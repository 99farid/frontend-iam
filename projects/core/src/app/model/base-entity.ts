export class BaseEntity {

    id!: string
    createdBy!: string
    createdDate!: string
    updatedBy?: string
    updatedDate?: string
    version!: number
    isActive!: boolean
}