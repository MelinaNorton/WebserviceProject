import {IsString} from "class-validator";

export class FilterTokenDto {
    @IsString()
    type : string;

    @IsString()
    user_id : string;
}