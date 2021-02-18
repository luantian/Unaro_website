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
              ref="mycode"
              v-model="curCode"
              :options="cmOptions"
              class="code"
            ></codemirror>
          </div>
          <div class="edit1">
            <codemirror
              ref="mycode"
              v-model="curCode"
              :options="cmOptions"
              class="code"
            ></codemirror>
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
        curCode: "function",
        cmOptions: {
          value: 'aaaaa',
          mode: "javascript",
          theme: "cobalt"
        }
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
    width: 266px;
    height: 255px;
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
    padding-bottom: 98px;
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
  }

  .edit1, .edit2 {
    flex: 1;
  }

</style>