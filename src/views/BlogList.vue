<template>
  <div class="blog-list">
    <l-header :isDark="true"></l-header>
    <div class="container">
      <l-title>Featured Posts</l-title>
      <div class="cards">
        <div v-for="(item, index) in cards" :key="index" @click="toDetail(item, 'card')">
          <l-card :dataSource="item"></l-card>
        </div>
      </div>
    </div>
    
    <div class="bg7">
      <div class="container">
        <l-title>More Posts</l-title>
        <div class="blog-lst">
          <div v-for="(item, index) in blogs" :key="index" @click="toDetail(item, 'blog')">
            <blog-list-item :dataSource="item" :isLine="index !== blogs.length - 1"></blog-list-item>
          </div>
        </div>
      </div>
    </div>

    <l-footer></l-footer>
  </div>
</template>

<script>
  import LHeader from '@/components/LHeader'
  import LCard from '@/components/LCard'
  import LTitle from '@/components/LTitle'
  import BlogListItem from '@/components/BlogListItem'
  import BlogModel from '@/models/Blog'
  import CardModel from '@/models/Card'
  import LFooter from '@/components/LFooter'

  export default {
    name: 'BlogList',
    components: { LHeader, LCard, LTitle, BlogListItem, LFooter },
    data () {
      return {
        blogs: [],
        cards: []
      }
    },

    async created () {
      this.blogs = await BlogModel.getData()
      let cards = await CardModel.getData()
      if (cards.length > 2) {
        this.cards = cards.splice(this.cards.length - 2)
      } else {
        this.cards = cards
      }
    },
    methods: {
      toDetail (item, type) {
        // console.log('type', type)
        // console.log('item', item)
        this.$router.push({
          path: `/blogDetail/${type}_${item.id}`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-list {
    padding-top: 100px;
    height: 800px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .bg7 {
    background: #f7f7f7;
    padding-bottom: 80px;
  }
</style>