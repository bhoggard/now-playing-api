import { Injectable } from '@nestjs/common';

import axios from 'axios'

@Injectable()
export class AppService {
  async getCounterstream() {
    try {
      const response = await axios.get('http://counterstream.newmusicusa.org:8000/currentsong?sid=1')
      const dataArray = response.data.split(' - ')
      return { title: dataArray[1], composer: dataArray[0] }
    } catch (error) {
      console.error(error)
    }
  }

  async getNewSounds() {
    try {
      const response = await axios.get('https://api.wnyc.org/api/v1/whats_on/q2/')
      const entry = response.data["current_playlist_item"]["catalog_entry"]
      return { title: entry["title"], composer: entry["composer"]["name"] }
    } catch (error) {
      console.error(error)
    }
  }
}
