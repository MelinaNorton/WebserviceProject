import { Controller, Post, Get, Body, Param, Request } from "@nestjs/common";
import { LoadsService } from "./loads.service";
import { CreateLoadDto } from "src/utils/dtos/createLoad.sto";

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
@Get(':apikey')
async getLoads(@Param('apikey') api_key : string, @Request() req:Request){
    console.log("Loads request: ", req)
    return this.loadsService.getLoads(api_key)
}

}