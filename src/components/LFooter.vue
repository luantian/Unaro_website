<template>
  <div class="l-footer">
    <div class="container">
      <div class="main">
        <div>
          <div class="dt">Company</div>
          <router-link tag="div" class="dl" to="/company">About Unaro</router-link>
        </div>
        <div>
          <div class="dt">Resource</div>
          <router-link tag="div" class="dl" to="/blogList">Blog</router-link>
        </div>
        <div>
          <div class="dt">Contact</div>
          <div class="dl">21423798472@email.com</div>
        </div>
      </div>
      <div class="copyright">
        ©2021 Unaro Inc. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LFooter',
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

  .l-footer {
    background: #fff;
    padding-top: 35px;
  }

  .main {
    display: flex;
    justify-content: space-between;
    padding-right: 200px;
  }

  .copyright {
    border-top: 1px solid #dedede;
  }
  
  .dt {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
  
  .dl {
    color: #666;
    padding: 32px 0;
    cursor: pointer;
    transition: .2s;
    font-size: 14px;
    &:hover {
      color: #999;
    }
  }

  .copyright {
    padding: 24px 0;
    font-size: 14px;
    color: #666;
  }

</style>
