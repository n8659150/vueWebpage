<template>
  <div class="col-seven tab-full social-links pull-right">
    <ul>
      <li v-for="socialLink in socialLinks" :key="socialLink.$index">
          <a href="#">
            <i :class="socialLink.iconCSS"></i>
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'socialLinks',
  data () {
    return {
      socialLinks:[{name:'Facebook',iconCSS:'fa fa-facebook'},
                   {name:'Behance',iconCSS:'fa fa-behance'},
                   {name:'Twitter',iconCSS:'fa fa-twitter'},
                   {name:'Dribbble',iconCSS:'fa fa-dribbble'},
                   {name:'Instagram',iconCSS:'fa fa-instagram'}
                  ]
    }
  }
}
</script>

<style>

</style>
