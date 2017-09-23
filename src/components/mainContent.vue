<template>
	<main id="main-404-content" class="main-content-static" :class="{'menu-is-open':menuOpened}">
		<div class="content-wrap">
			<div class="shadow-overlay"></div>
			<mainContentArea></mainContentArea>
			<copyrights></copyrights>
			<footer>
				<div class="row">
					<socialLinks></socialLinks>
					<bottomLinks></bottomLinks>
				</div>
				<!-- /row -->
			</footer>
		</div>
		<!-- /content-wrap -->
	</main>
	<!-- /main-404-content -->
</template>

<script>
import mainContentArea from './mainContentArea.vue';
import copyrights from './copyrights.vue';
import socialLinks from './socialLinks.vue';
import bottomLinks from './bottomLinks.vue';

export default {
	name: 'mainContent',
	// props:['menuOpened'],
	components: {
		mainContentArea: mainContentArea,
		copyrights: copyrights,
		socialLinks: socialLinks,
		bottomLinks: bottomLinks
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
