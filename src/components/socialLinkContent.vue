<template>
  <li>
    <a href="#">
      <i :class="sLink.iconCSS"></i>
    </a>
  </li>
</template>

<script>
export default {
  name: 'socialLinkContent',
  props: ['sLink']
}
</script>

<style>

</style>
