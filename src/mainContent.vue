<template>
    <main id="main-404-content" class="main-content-static">

   	<div class="content-wrap">

		  <div class="shadow-overlay"></div>
      <mainContentArea></mainContentArea>
		  <copyrights></copyrights>
      

		   <footer>
		   	<div class="row">

		   		<socialLinks></socialLinks>
		   			
		  			<div class="col-five tab-full bottom-links">
			   		<ul class="links">
				   		<li><a href="#">Homepage</a></li>
				         <li><a href="#">About</a></li>
				         <li><a href="mailto:joe@quatro.com">Report Error</a></li>			                    
				   	</ul>

				   	<div class="credits">
				   		<p>More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
				   	</div>
			   	</div>   		   		

		   	</div> <!-- /row -->    		  		
		   </footer>

		</div> <!-- /content-wrap -->
   
   </main> <!-- /main-404-content -->

</template>

<script>
import mainContentArea from './mainContentArea.vue';
import copyrights from './copyrights.vue';
import socialLinks from './socialLinks.vue';
export default {
  name: 'mainContent',
  components:{
    mainContentArea:mainContentArea,
    copyrights:copyrights,
    socialLinks:socialLinks
  }
}
</script>

<style>

</style>
