import { BaseEntity } from "./base-entity";

export class TrackActivity extends BaseEntity {

    code!: string
    nameAsset!: string
    statusAsset!: string
    activity!: string
    codeTransaction?: string
    dateActivity!: string
}