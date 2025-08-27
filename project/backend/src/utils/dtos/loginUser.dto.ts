import {IsString, IsBoolean} from "class-validator";

export class LoginUserDto{
    @IsString()
    username : string;

    @IsString()
    password : string;

    @IsBoolean()
    is_team_driver_login : boolean;

    //is this necessary?
    @IsString()
    oidc_idp_code : string

    //is this necessary?
    @IsString()
    oidc_nonce : string

    //is this necessary?
    @IsString()
    oidc_id_token : string

    @IsString()
    oidc_access_token : string

    @IsString()
    oidc_expires_in : string

    @IsString()
    oidc_refresh_token : string
}