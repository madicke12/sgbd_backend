import { Controller, UseGuards } from '@nestjs/common';
import { CahierTexteService } from './cahier-texte.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('cahier-texte')
export class CahierTexteController {
    constructor(private service : CahierTexteService){}

    @UseGuards(AuthGuard('jwt'))
    @Get('all')
    getCahier(){
        return this.service.getCahier()
    }

}
