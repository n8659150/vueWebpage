<template>
    <header class="main-header">
      <div class="row">
        <div class="logo">
            <a href="index.html">{{logoText}}</a>
          </div>   		
      </div>   

      <a class="menu-toggle" href="#"><span>{{menuToggle}}</span></a>	
    </header> 
</template>

<script>
export default {
  name: 'mainHeader',
  data () {
    return {
      logoText: 'Quatro',
      menuToggle:'Menu'
    }
  }
}
</script>

<style>

</style>
