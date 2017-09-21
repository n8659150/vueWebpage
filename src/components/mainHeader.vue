<template>
  <header class="main-header" :class="{'menu-is-open':menuOpened}">
    <div class="row">
      <div class="logo">
        <a href="index.html">{{logoText}}</a>
      </div>
    </div>
    <a class="menu-toggle" @click="menuClick" href="#">
      <span>{{menuToggle}}</span>
    </a>
  </header>
</template>

<script>
export default {
  name: 'mainHeader',
  props:['menuOpened','method'],
  data() {
    return {
      logoText: 'Quatro',
      menuToggle: 'Menu'
    }
  },
  methods:{
    menuClick:function(){
      this.method()
    }
  }
}
</script>

<style>

</style>
