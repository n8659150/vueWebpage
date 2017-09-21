<template>
  <div class="col-five tab-full bottom-links">
    <ul class="links">
      <bottomLinkContent v-for="bottomLink in bottomLinks" :key="bottomLink.$index" v-bind:bLink="bottomLink"></bottomLinkContent>
    </ul>
    <credits></credits>
  </div>
</template>

<script>
import bottomLinkContent from './bottomLinkContent.vue';
import credits from './credits.vue';

export default {
  name: 'bottomLinks',
  components: {
    bottomLinkContent: bottomLinkContent,
    credits: credits
  },
  data() {
    return {
      bottomLinks: ['Homepage', 'About', 'Report Error']
    }
  }
}
</script>

<style>

</style>
