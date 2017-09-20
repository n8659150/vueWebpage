<template>
  <div id="app" style="height:100%">
    <mainHeader></mainHeader>
    <!--{{msg}}-->
    <mainNav></mainNav>
    <mainContent></mainContent>
  </div>
</template>

<script>
import mainHeader from './mainHeader.vue';
import mainNav from './mainNav.vue';
import mainContent from './mainContent.vue'

export default {
  name: 'app',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
  components:{
    mainHeader:mainHeader,
    mainNav:mainNav,
    mainContent:mainContent
  }
}
</script>
<style>
</style>
