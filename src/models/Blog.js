import Base from '@/models/Base'

class Blog extends Base {
  constructor () {
    super()
  }

  static async getData () {
    return await this.get({
      url: '/public/blog/blogs.json'
    })
  }

}

export default Blog