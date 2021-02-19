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



