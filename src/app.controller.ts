import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('counterstream')
  getCounterStream() {
    return this.appService.getCounterstream();
  }

  @Get('newsounds')
  getNewSounds() {
    return this.appService.getNewSounds();
  }
}
