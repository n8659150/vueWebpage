<template>
      <li>
        <a :href="navContent.url" :title="navContent.name">{{navContent.name}}</a>
      </li>
</template>

<script>
export default {
  name: 'mainNavContent',
  props:['navContent']
}
</script>

<style>

</style>
