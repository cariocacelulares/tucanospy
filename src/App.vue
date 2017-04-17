<template>
  <div id="app">
    <list></list>
  </div>
</template>

<script>
import List from './components/List'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #333;
    color: #fff;
  }
</style>
