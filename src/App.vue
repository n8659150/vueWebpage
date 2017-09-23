<template>
  <div id="app" style="height:100%">
    <mainHeader></mainHeader>
    <mainNav></mainNav>
    <mainContent></mainContent>
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
  }
}
</script>
<style>

</style>
