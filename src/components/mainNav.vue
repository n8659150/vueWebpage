<template>
  <nav id="menu-nav-wrap" :class="{'menu-is-open':menuOpened}">
    <h5>{{navTitle}}</h5>
    <ul class="nav-list">
      <mainNavContent v-for="navItem in navItems" :key="navItem.$index" v-bind:navContent="navItem"></mainNavContent>
    </ul>
    <h5>Some Text</h5>
    <p>Lorem ipsum Non non Duis adipisicing pariatur eu enim Ut in aliqua dolor esse sed est in sit exercitation eiusmod aliquip consequat.</p>
  </nav>
</template>

<script>
import mainNavContent from './mainNavContent.vue'

export default {
  name: 'mainNav',
  // props:['menuOpened'],
  components: {
    mainNavContent: mainNavContent
  },
  data() {
    return {
      navTitle: 'Site Pages',
      navItems: [{ name: 'Home', url: '#' }, { name: 'About', url: '#' }, { name: 'Portfolio', url: '#' }, { name: 'Blog', url: '#' }, { name: 'FAQ', url: '#' }, { name: 'Contact', url: '#' }]
		}
  },
  computed:{
    menuOpened () {
      return this.$store.state.menuOpened
    }
  }
}
</script>

<style>

</style>
