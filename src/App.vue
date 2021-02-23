<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }

</script>

<style lang="scss" scoped>

  #app {
    min-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
