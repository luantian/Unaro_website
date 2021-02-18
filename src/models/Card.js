import Base from '@/models/Base'

class Card extends Base {
  constructor () {
    super()
  }

  static async getData () {
    return await this.get({
      url: '/public/data/card.json'
    })
  }

  static async getDetail () {
    return await this.get({
      url: '/public/data/card_des.json'
    })
  }

}

export default Card