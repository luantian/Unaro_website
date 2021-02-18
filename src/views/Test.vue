<template>
  <div class="index">
    <codemirror
      ref="mycode"
      v-model="curCode"
      :options="cmOptions"
      class="code"
      @changes="changes"
    ></codemirror>
    <button @click="get">get</button>
    <button @click="set">set</button>
  </div>
</template>

<script>

  import { codemirror } from 'vue-codemirror'
  
  export default {
    name: 'Index',
    components: { codemirror },
    data () {
      return {
        curCode: "",
        cmOptions: {
          value: 'aaaaa',
          mode: "javascript",
          theme: "cobalt"
        }
      }
    },
    methods: {
      changes () {
        console.log('changes', this.curCode)
      },
      get () {
        console.log('get', this.curCode)
      },
      set () {
        let str = "class Node {\n\tname = 'terence'\n}\n"
        let d = str.split('')
        let index = 0
        this.timer = setInterval(() => {
          this.curCode += d[index]
          index ++
          if (index == d.length - 1) {
            clearTimeout(this.timer)
          }
        }, 50 + index)
        // console.log(JSON.stringify(this.curCode))
      }
    },
    mounted () {
      
    }
  }
</script>

<style lang="scss" scoped>

</style>




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

  ::v-deep .hljs-keyword {
    color: red;
  }

  ::v-deep .markdown-body pre {
    background: red;
    border: 1px solid green;
    border-radius: 100px;
  }
</style>
