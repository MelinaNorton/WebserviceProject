import {IsString} from "class-validator";

export class FilterUserDto {
    @IsString()
    _id ?: string;

    @IsString()
    username ?: string;

    @IsString()
    password ?: string;

    @IsString()
    full_name ?: string
}