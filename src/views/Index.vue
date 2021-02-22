<template>
  <div class="index">
    <l-header></l-header>

    <!-- banner 开始 -->

    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <div>
            <div class="banner-title">
              The Cost-effective Date Api  Platform
            </div>
            <div class="banner-des">
              Unaro is a flexible, developer-friendly, transactional database delivered to you as a secure,
            </div>
          </div>
          <div class="banner-img-wrap">
            <img src="/img/img_Home_banner_icons@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- banner 结束 -->

    <!-- product 开始 -->

    <div class="product">
      <div class="container">
        <div class="product-title">
          The Title Placeholder of Product Features
        </div>
        <div class="product-img-wrap">
          <img src="/img/img_Home_product@2x.png" alt="">
        </div>

        <div class="product-content">
          <div class="product-des" v-for="(item, index) in productDes" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <!-- product 结束 -->

    <!-- powerful 开始 -->

    <div class="powerful">
      <div class="container">
        <div class="powerful-title">
          The world’s most powerful and <br> easy-to-use Api
        </div>
        <div class="l-edit">
          <div class="edit1">
            <codemirror
              ref="mycode1"
              v-model="curCode1"
              :options="cmOptions1"
              lineNumbers="true"
              class="code"
            ></codemirror>
          </div>
          <div class="edit2">
            <!-- <codemirror
              ref="mycode2"
              v-model="tempCurCode2"
              :options="cmOptions2"
              class="code"
            ></codemirror> -->
            <img style="width: 100%; height: 100%;" src="/img/23.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- powerful 结束 -->

    <l-footer></l-footer>
  </div>
</template>

<script>
  import LHeader from '@/components/LHeader'
  import LFooter from '@/components/LFooter'

  import { codemirror } from 'vue-codemirror'
  require('codemirror/addon/edit/matchbrackets')
  require('codemirror/addon/selection/active-line')

  export default {
    name: 'Index',
    components: { LHeader, LFooter, codemirror },
    data () {
      return {
        productDes: [
          'One Platform, One Copy of Data One Platform, One of',
          'One Platform, One Copy of Data One Platform, One of',
          'One Platform, One Copy of Data One Platform, One of',
          'One Platform, One Copy of Data One Platform, One of'
        ],
        curCode1: "class Person {\n\tname = 'terence'\n\tage = 18\n\tsex = 0\n\tsetName (name) {\n\t\tthis.name = name\n\t}\n\tgetName () {\n\t\treturn this.name\n\t}\n\tsetAge (age) {\n\t\tthis.age = age\n\t}\n\tgetAge () {\n\t\treturn this.age\n\t}\n\tsetSex (sex) {\n\t\tthis.sex = sex\n\t}\n\tgetSex () {\n\t\treturn this.sex\n\t}\n}",
        curCode2: "Last login: Thu Feb 18 15:50:33 on ttys001\n",
        cmOptions1: {
          value: 'aaaaa',
          mode: "javascript",
          lineNumbers: true,
          theme: "eclipse",
          readOnly: true
        },
        cmOptions2: {
          value: 'bbbbbb',
          mode: "cmd",
          theme: "cobalt",
          readOnly: true
        }
      }
    },
    computed: {
      tempCurCode2 () {
        return this.curCode2.replace('\n', '\n~ »')
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .banner {
    height: 670px;
    background: url('/img/img_Home_banner@2x.png');
    background-size: 100% 100%;
    margin-bottom: 115px;
  }

  .banner-content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .banner-img-wrap {
    width: 328px;
    height: 328px;
    > img {
      width: 100%;
      height: 100%;
    }
  }

  .banner-title {
    width: 653px;
    height: 136px;
    font-size: 52px;
    font-weight: 100;
    color: #F6F7F9;
    line-height: 68px;
  }

  .banner-des {
    width: 488px;
    height: 69px;
    font-size: 20px;
    font-weight: 300;
    color: #F6F7F9;
    line-height: 36px;
    margin-top: 40px;
  }

  .product-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .product-title {
    height: 64px;
    font-size: 48px;
    font-weight: 100;
    color: #333333;
    line-height: 64px;
    text-align: center;
    padding-bottom: 60px;
  }

  .product-img-wrap {
    width: 100%;
    > img {
      width: 100%;
    }
  }

  .product-des {
    width: 162px;
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    line-height: 28px;
    margin: 78px 0;
  }

  .powerful {
    background: #f7f7f7;
    padding: 100px 0;
  }

  .powerful-title {
    font-size: 48px;
    font-weight: 100;
    color: #333333;
    line-height: 64px;
    text-align: center;
    margin-bottom: 82px;
  }

  .l-edit {
    display: flex;
    justify-content: space-between;
  }

  .edit1, .edit2 {
    // flex: 1;
    width: 49.6%;
    box-shadow: 0px 4px 12px 0px #D4CED5;
  }

  ::v-deep .CodeMirror-scroll {
    padding-bottom: 0;
    margin-bottom: 0;
    margin-right: 0;
    background: #FCF4FE;;
  }

  ::v-deep .edit1 {
    .CodeMirror-gutter.CodeMirror-linenumbers {
      width: 46px !important;
      background: #EDE0FF;
      text-align: right;
    }
    .CodeMirror-linenumber.CodeMirror-gutter-elt {
      width: 30px !important;
    }
    .cm-s-cobalt .CodeMirror-gutters {
      border: none;
    }
    .cm-s-cobalt .CodeMirror-linenumber {
      color: #666;
    }
    .cm-s-cobalt.CodeMirror {
      background: #FCF4FE;;
    }
  }

  ::v-deep .edit2 {
    .CodeMirror-linenumber.CodeMirror-gutter-elt {
      width: 40px !important;
    }
    .cm-s-cobalt .CodeMirror-gutters {
      border: none;
    }
    .cm-s-cobalt .CodeMirror-linenumber {
      color: #666;
    }
    .cm-s-cobalt.CodeMirror {
      background: #621D43;;
    }
  }

  ::v-deep {
    .CodeMirror pre.CodeMirror-line {
      // padding: 6px 0;
      line-height: 1.4;
      padding-left: 12px;
    }

    .CodeMirror-linenumber {
      // padding: 6px 0;
      line-height: 1.4;
    }

    .CodeMirror-lines {
      padding: 16px 0;
    }

    .CodeMirror {
      height: 560px;
    }
  }
</style>