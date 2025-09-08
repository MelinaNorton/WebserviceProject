import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { LoadsService } from "./loads.service";
import { CreateLoadDto } from "src/utils/dtos/createLoad.sto";

@Controller('loads')
export class LoadsController{
    constructor(
        private readonly loadsService : LoadsService
    ){}

@Post()
async createLoad(@Body() createLoadDto : CreateLoadDto){
    return this.loadsService.createLoad(createLoadDto)
}

@Get(':apikey')
async getLoads(@Param('apikey') api_key : string){
    return this.loadsService.getLoads(api_key)
}

}