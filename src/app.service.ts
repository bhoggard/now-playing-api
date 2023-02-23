import { Injectable } from '@nestjs/common'
import { XMLParser } from 'fast-xml-parser'

import axios from 'axios'

@Injectable()
export class AppService {
  async getCounterstream() {
    try {
      const response = await axios.get(
        'http://counterstream.newmusicusa.org:8000/currentsong?sid=1',
      )
      const dataArray = response.data.split(' - ')
      return { title: dataArray[1], composer: dataArray[0] }
    } catch (error) {
      console.error(error)
    }
  }

  async getDroneZone() {
    try {
      const response = await axios.get(
        'http://api.somafm.com/recent/dronezone.tre.xml',
      )
      return this.parseSomaFM(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getNewSounds() {
    try {
      const response = await axios.get(
        'https://api.wnyc.org/api/v1/whats_on/q2/',
      )
      const entry = response.data['current_playlist_item']['catalog_entry']
      return { title: entry['title'], composer: entry['composer']['name'] }
    } catch (error) {
      console.error(error)
    }
  }

  async getYle() {
    try {
      const response = await axios.get(
        'https://yle.fi/radiomanint/LiveXML/r17/item(0).xml',
      )
      const parser = new XMLParser()
      const json = parser.parse(response.data)
      const roles = json.RMPADEXPORT.ITEM.ROLES.ROLE
      const composer = roles.filter((i) => i.ROLE_NAME == 'COMPOSER')[0]
        .PERSON_NAME
      const title = json.RMPADEXPORT.ITEM.memos.memo[1].memo_data
      return { title: title, composer: composer }
    } catch (error) {
      console.error(error)
    }
  }

  parseSomaFM = (data) => {
    const parser = new XMLParser()
    const json = parser.parse(data)
    const event = json.event
    return { composer: event.artist, title: event.title }
  }
}
