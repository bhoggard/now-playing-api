import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('counterstream')
  getCounterStream() {
    return this.appService.getCounterstream()
  }

  @Get('dronezone')
  getDroneZone() {
    return this.appService.getDroneZone()
  }

  @Get('newsounds')
  getNewSounds() {
    return this.appService.getNewSounds()
  }
  @Get('yle')
  getYle() {
    return this.appService.getYle()
  }
}
