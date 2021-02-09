<template>
  <div class="blog-detail">
    <div class="markdown-body">
      <markdown></markdown>
    </div>
  </div>
</template>

<script>

import BlogModel from '@/models/Blog'
import Markdown from '/public/md/test1.md'

export default {
  name: 'BlogDetail',
  components: { Markdown },
  data () {
    return {
      
    }
  },
  async created () {
    let data = await BlogModel.getData()
    console.log('data', data)
  },
  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>
  .markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}

  // ::v-deep .hljs-keyword {
  //   color: red;
  // }

  // ::v-deep .markdown-body pre {
  //   background: red;
  //   border: 1px solid green;
  //   border-radius: 100px;
  // }
</style>
