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
  // props:['menuOpened','method'],
  data() {
    return {
      logoText: 'Quatro',
      menuToggle: 'Menu',
      // menuOpened:this.$store.state.menuOpened 此处应使用计算属性 computed property，直接写在data中不是双向绑定
    }
  },
  methods:{
    menuClick:function(){
      this.$store.commit("toggleMenu");
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
