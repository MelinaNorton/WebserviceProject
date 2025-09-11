import { Controller, Post, Get, Body, Param, Request, UnauthorizedException } from "@nestjs/common";
import { LoadsService } from "./loads.service";
import { CreateLoadDto } from "src/utils/dtos/createLoad.sto";
import { Headers } from "@nestjs/common";

@Controller('loads')
export class LoadsController{
    constructor(
        //creates an instance of the service used in this controller
        private readonly loadsService : LoadsService
    ){}

//endpoint for creating a new load (for testing)
@Post()
async createLoad(@Body() createLoadDto : CreateLoadDto){
    return this.loadsService.createLoad(createLoadDto)
}

//get endpoint that returns the user's loads based on the API key parameter
@Get()
async getLoads(@Headers('authorization') authHeader : string){
    const api_key = authHeader.match(/^Token\s+token="?([^",\s]+)"?/i)
    if(!api_key){
        throw new UnauthorizedException('no token found in header object')
    }
    console.log("Auth header: ", api_key)
    return this.loadsService.getLoads(api_key[0])
}

}