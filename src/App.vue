<template>
  <div id="app">
    <news></news>
    {{msg}}
  </div>
</template>

<script>
import News from './News.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    news:News
  }
}
</script>
<style>
</style>
