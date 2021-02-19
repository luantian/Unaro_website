<template>
  <div class="company">
    <l-header :isDark="true"></l-header>
    <div class="banner">
      <div class="container">
        <div class="banner-title">To lead api storage trend and <br> become the best data company</div>
        <div class="banner-text">Unaro is a flexible, developer-friendly, transactional database delivered to you as a secure, web-native API. Never again worry about database provisioning, maintenance, scaling correctness.</div>
      </div>
    </div>

    <div class="context">
      <div class="container context-item">
        <div class="context-title">Vision</div>
        <div class="context-text">Unaro is a flexible, developer-friendly, transactional database delivered to you as a secure, web-native API. Never again worry about database provisioning, maintenance, scaling correctness.</div>
      </div>
      <div class="container context-item" style="border: none;">
        <div class="context-title">Culture</div>
        <div class="context-text">Unaro is a flexible, developer-friendly, transactional database delivered to you as a secure, web-native API. Never again worry about database provisioning, maintenance, scaling correctness.</div>
      </div>
    </div>
    
    <l-footer></l-footer>
  </div>
</template>

<script>

  import LHeader from '@/components/LHeader'
  import LFooter from '@/components/LFooter'

  export default {
    name: 'Company',
    components: { LHeader, LFooter },
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    height: 465px;
    background: url('/img/img_Company_banner_bg@2x.png') no-repeat;
    background-size: 100% 100%;
  }

  .banner-title {
    height: 128px;
    font-size: 42px;
    font-weight: 100;
    color: #333333;
    line-height: 64px;
    padding-top: 154px;
    margin-bottom: 20px;
  }

  .banner-text {
    line-height: 30px;
  }

  .context {
    background: #f7f7f7;
  }

  .context-title {
    height: 64px;
    line-height: 64px;
    font-size: 42px;
    font-weight: 100;
    color: #333333;
  }

  .context-text {
    line-height: 24px;
  }

  .context-item {
    border-bottom: 1px solid #dedede;
    padding: 80px 0;
  }

</style>
