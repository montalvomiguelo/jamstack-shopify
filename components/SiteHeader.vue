<template>
  <header class="">
    <nuxt-link :to="{ name: 'index' }" class="">
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
