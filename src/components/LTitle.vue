<template>
  <div class="l-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LTitle'
}
</script>

<style lang="scss" scoped>
  .l-title {
    height: 64px;
    font-size: 48px;
    font-weight: 500;
    color: #333333;
    line-height: 64px;
    padding: 40px 0;
  }
</style>