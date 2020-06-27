<template>
  <header class="site-header">
    <nuxt-link :to="{ name: 'index' }" class="site-header__logo">
      <img src="~/assets/barrel.png" alt="Barrel">
    </nuxt-link>
    <site-nav />
  </header>
</template>

<script>
import SiteNav from '~/components/SiteNav.vue'

export default {
  components: {
    SiteNav
  }
}
</script>

<style>
.site-header {
  padding-top: 1.618em;
  padding-bottom: 1.618em;
}

.site-header__logo {
  width: 240px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

@media (min-width: 768px) {
  .site-header {
    padding-top: calc(1.618 * 2em);
    padding-bottom: calc(1.618 * 2em);
  }

  .site-header__logo {
    width: 600px;
  }
}
</style>
