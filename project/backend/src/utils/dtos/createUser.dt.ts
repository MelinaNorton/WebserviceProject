import {IsString, IsBoolean} from "class-validator";

export class CreateUserDto {
    @IsString()
    username : string

    @IsString()
    password : string

    @IsString()
    full_name : string
}