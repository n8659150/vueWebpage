<template>
  <div class="col-seven tab-full social-links pull-right">
    <ul>
      <!-- 为了测试目的，使用props 进行父子组件之间的数据传递，直接是使用v-for也可 -->
      <socialLinkContent v-for="socialLink in socialLinks" :key="socialLink.$index" v-bind:sLink="socialLink"></socialLinkContent>
    </ul>
  </div>
</template>

<script>
import socialLinkContent from './socialLinkContent.vue'
export default {
  name: 'socialLinks',
  components: {
    socialLinkContent: socialLinkContent
  },
  data() {
    return {
      socialLinks: [
        { name: 'Facebook', iconCSS: 'fa fa-facebook' },
        { name: 'Behance', iconCSS: 'fa fa-behance' },
        { name: 'Twitter', iconCSS: 'fa fa-twitter' },
        { name: 'Dribbble', iconCSS: 'fa fa-dribbble' },
        { name: 'Instagram', iconCSS: 'fa fa-instagram' }
      ]
    }
  }
}
</script>

<style>

</style>
