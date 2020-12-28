<template>
  <header class="py-6 md:py-10">
    <nuxt-link :to="{ name: 'index' }" class="block w-60 md:w-150 mx-auto">
      <img
        src="~/assets/barrel.png"
        :alt="name"
      >
    </nuxt-link>
    <site-nav />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '~/components/SiteNav.vue'

export default {
  components: {
    SiteNav
  },
  computed: mapState({
    name: state => state.shop.name
  })
}
</script>
