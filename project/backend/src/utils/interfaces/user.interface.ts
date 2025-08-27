export interface User {
    full_name : string,
    api_token : string,
    password : string,
    is_team_driver_login : boolean,
    oidc_access_token : string,
    oidc_expires_in : string,
    oidc_refresh_token : string
}