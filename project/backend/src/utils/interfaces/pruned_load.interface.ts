import {IsString, IsBoolean, IsNumber} from "class-validator";

export class PrunedLoadInterface {
    id : string

    display_identifier : string

    sort : number

    order_number : string

    load_status : string

    load_status_label : string

    active : boolean

    current : boolean
}