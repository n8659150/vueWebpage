<template>
  <div id="app" style="height:100%">
    <mainHeader  :method="toggleMenu" :menuOpened="isMenuOpened"></mainHeader>
    <mainNav :menuOpened="isMenuOpened"></mainNav>
    <mainContent :menuOpened="isMenuOpened"></mainContent>
  </div>
</template>

<script>
import mainHeader from './components/mainHeader.vue';
import mainNav from './components/mainNav.vue';
import mainContent from './components/mainContent.vue';

export default {
  name: 'app',
  components: {
    mainHeader: mainHeader,
    mainNav: mainNav,
    mainContent: mainContent
  },
  data () {
    return {
      isMenuOpened:false
    }
  },
  methods:{
    toggleMenu(){
      this.isMenuOpened = !this.isMenuOpened
    }
  }
}
</script>
<style>

</style>
