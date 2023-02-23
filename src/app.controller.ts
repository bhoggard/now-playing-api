import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  health() {
    return "now-playing-api"
  }

  @Get('api/counterstream')
  getCounterStream() {
    return this.appService.getCounterstream()
  }

  @Get('api/dronezone')
  getDroneZone() {
    return this.appService.getDroneZone()
  }

  @Get('api/newsounds')
  getNewSounds() {
    return this.appService.getNewSounds()
  }
  @Get('api/yle')
  getYle() {
    return this.appService.getYle()
  }
}
