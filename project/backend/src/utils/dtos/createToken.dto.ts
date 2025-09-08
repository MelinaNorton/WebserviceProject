import {IsString} from "class-validator";

export class CreateTokenDto {
    @IsString()
    api_token : string

    @IsString()
    user_id : string
}