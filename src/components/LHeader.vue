<template>
  <div :class="['header', { 'dark': isDark }]">
    <div class="container">
      <router-link class="logo" tag="div" to="/">
        <img :src="`/img/logo_${isDark ? 'dark' : 'white'}@2x.svg`" alt="">
      </router-link>
      <div class="navs">
        <router-link class="nav" tag="div" :to="item.path" v-for="(item, index) in navs" :key="index">
          <div>{{ item.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "LHeader",
    props: {
      isDark: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        navs: [ { path: '/blogList', title: 'Blog' }, { path: '/company', title: 'Company' } ]
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
  }

  .header {
    height: 72px;
    line-height: 72px;
    font-size: 16px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .logo {
      width: 50px;
      height: 13px;
      padding-right: 34px;
      cursor: pointer;
      transition: .2s;
      &:hover {
        opacity: .4;
      }
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .navs {
    height: 100%;
    display: flex;
    color: #fff;
    .nav {
      // margin-right: 64px;
      cursor: pointer;
      padding: 0 30px;
      transition: .2s;
      &:hover {
        color: #c9c7c7;
      }
    }
  }

  .header.dark .navs {
    color: #161616;
    .nav {
      &:hover {
        color: #999;
      }
    }
  }
</style>
