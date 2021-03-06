import Base from '@/models/Base'

class Blog extends Base {
  constructor () {
    super()
  }

  static async getData () {
    return await this.get({
      url: '/public/data/blog.json'
    })
  }

  static async getDetail () {
    return await this.get({
      url: '/public/data/blog_des.json'
    })
  }

}

export default Blog