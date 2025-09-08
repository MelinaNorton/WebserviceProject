import {IsString, IsBoolean, IsNumber} from "class-validator";

export class CreateLoadDto {
    @IsString()
    user_id : string

    @IsString()
    display_identifier : string

    @IsNumber()
    sort : number

    @IsNumber()
    order_number : number

    @IsString()
    load_status : string

    @IsString()
    load_status_label : string

    @IsBoolean()
    active : boolean

    @IsBoolean()
    current : boolean
}