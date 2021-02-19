<template>
  <div :class="['blog-list-item', isLine ? 'border-bottom-line' : ''] ">
    <div class="img-wrap">
      <img :src="dataSource.img" alt="img">
    </div>
    <div class="content-wrap">
      <div class="title">{{ dataSource.title }}</div>
      <div class="content">{{ dataSource.content }}</div>
      <div class="sign">
        <span class="author">{{ dataSource.author }}</span>
        <span class="time">{{ dataSource.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogListItem',
    props: {
      dataSource: {
        type: Object,
        default: () => {}
      },
      isLine: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-list-item {
    display: flex;
    transition: .3s;
    cursor: pointer;
    position: relative;
    top: 0;
    &:hover {
      top: -6px;
    }
  }
  .img-wrap {
    width: 320px;
    min-width: 320px;
    height: 200px;
    background: #F7F8F9;
    border-radius: 8px;
    margin-right: 24px;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  .content-wrap {
    box-sizing: border-box;
    position: relative;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    color: #333333;
    line-height: 33px;
    overflow : hidden;
    padding: 10px 0;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .content {
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .sign {
    position: absolute;
    left: 0;
    bottom: 8px;
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
