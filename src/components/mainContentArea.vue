<template>
	<div class="main-content">
		<div class="row">
			<div class="col-twelve">
				<h1 class="kern-this">{{title}}</h1>
				<p>
					{{description}}
				</p>
				<div class="search">
					<form>
						<input type="text" id="s" name="s" class="search-field" placeholder="Type and hit enter …">
					</form>
				</div>
			</div>
			<!-- /twelve -->
		</div>
		<!-- /row -->
	</div>
	<!-- /main-content -->
</template>

<script>
export default {
	name: 'mainContentArea',
	data() {
		return {
			title: '404 Error.',
			description: 'Oooooops! Looks like nothing was found at this location. Maybe try on of the links below, click on the top menu or try a search?'
		}
	}
}
</script>

<style>

</style>
