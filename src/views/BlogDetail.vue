<template>
  <div class="blog-detail">
    <l-header :isDark="true"></l-header>
    <div class="container">
      <div class="detail">
        <div class="content" v-for="(item, index) in detail" :key="index">
          <div class="img" v-if="item.type === 'img'"><img :src="item.content"/></div>
          <div class="title" v-else-if="item.type === 'title'">{{ item.content }}</div>
          <div class="text" v-else>{{ item.content }}</div>
        </div>
      </div>
    </div>
    <l-footer></l-footer>
  </div>
</template>

<script>

  import LHeader from '@/components/LHeader'
  import LFooter from '@/components/LFooter'
  import BlogModel from '@/models/Blog'
  import CardModel from '@/models/Card'

  export default {
    name: 'BlogDetail',
    components: { LHeader, LFooter },
    data () {
      return {
        detail: {},
        titleInfo: {}
      }
    },
    async created () {
      this.stringId = this.$route.params.id
      let index = this.stringId.indexOf('_')
      let sign = this.stringId.substring('', index)
      let id = this.stringId.substring(index + 1)
      let titleInfos = []
      let titleInfo = {}
      let tempDetail = {}

      if (sign === 'blog') {
        tempDetail = await BlogModel.getDetail()
        titleInfos = await BlogModel.getData()
      } else if (sign === 'card') {
        tempDetail = await CardModel.getDetail()
        titleInfos = await CardModel.getData()
      }

      titleInfo = titleInfos.find((item) => {
        return item.id === id
      })

      this.detail = tempDetail[id]
      this.titleInfo = titleInfo

      console.log('this.detail', this.detail)
      console.log('this.titleInfo', this.titleInfo)
    }
  }
</script>

<style lang="scss" scoped>
  .blog-detail {
    width: 100%;
    padding-top: 100px;
  }

  .detail, .content {
    width: 100%;
  }

  .container {
    padding-bottom: 100px;
  }

  .title {
    color: #161616;
    font-weight: 500;
    font-size: 18px;
    margin: 20px 0;
  }

  .text {
    color: #333;
    font-size: 18px;
    line-height: 1.8;
  }

  .img {
    width: 100%;
    margin: 30px 0;
    img {
      width: 100%;
    }
  }

</style>