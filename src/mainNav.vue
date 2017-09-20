<template>
    <nav id="menu-nav-wrap">
   	<h5>{{navTitle}}</h5>   	
		<ul class="nav-list">
			<li v-for="navItem in navItems" :key="navItem.$index">
        <a :href="navItem.url" :title="navItem.name">{{navItem.name}}</a>
      </li>
		</ul>

		<h5>Some Text</h5>  
		<p>Lorem ipsum Non non Duis adipisicing pariatur eu enim Ut in aliqua dolor esse sed est in sit exercitation eiusmod aliquip consequat.</p>
	</nav>
</template>

<script>
export default {
  name: 'mainNav',
  data () {
    return {
      navTitle: 'Site Pages',
      navItems:[{name:'Home',url:'#'},{name:'About',url:'#'},{name:'Portfolio',url:'#'},{name:'Blog',url:'#'},{name:'FAQ',url:'#'},{name:'Contact',url:'#'}]
    }
  }
}
</script>

<style>

</style>
