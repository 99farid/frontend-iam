import { InsertReqDataFilesDto } from "../files/insert-req-data-files-dto"

export class InsertReqDataProfileUsersDto {

    idUser!: string
    idEmployee!: string
    idProfilePict!: InsertReqDataFilesDto
    isActive!: boolean

}