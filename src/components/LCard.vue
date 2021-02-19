<template>
  <div class="l-card">
    <div class="img-wrap">
      <img :src="dataSource.img" alt="img">
    </div>
    <div class="title">{{ dataSource.title }}</div>
    <div class="content">{{ dataSource.content }}</div>
    <div class="sign">
      <span class="author">Hassen Karaa</span>
      <span class="time">Jan 6th, 2021</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LCard',
    props: {
      dataSource: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .l-card {
    width: 578px;
    padding: 24px;
    box-sizing: border-box;
    box-shadow: 0px 3px 9px 0px #DEE2EE;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    transition: .3s;
    cursor: pointer;
    position: relative;
    top: 0;
    &:hover {
      box-shadow: 0px 3px 9px 0px #c8cad1;
      top: -6px;
    }
  }
  .img-wrap {
    width: 530px;
    height: 300px;
    > img { width: 100%; height: 100%; border-radius: 4px; }
  }
  .title {
    font-size: 24px;
    font-weight: 500;
    color: #333333;
    line-height: 33px;
    padding-top: 10px;
  }
  .content {
    font-size: 16px;
    font-weight: 400;
    height: 90px;
    color: #666666;
    line-height: 22px;
    margin: 12px 0 38px 0;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    letter-spacing: .8px;
  }
  .sign {
    position: absolute;
    bottom: 20px;
  }

  .author {
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    line-height: 22px;
    margin-right: 16px;
  }

  .time {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
  }

  .border-bottom-line {
    border-bottom: 1px solid #ddd;
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
</style>