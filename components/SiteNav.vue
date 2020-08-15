<template>
  <nav class="site-nav">
    <nuxt-link :to="{ name: 'index' }" class="site-nav__link h3">
      Shop
    </nuxt-link>
    <nuxt-link :to="{ name: 'cart' }" class="site-nav__link h3">
      Cart
      <small
        v-if="lineItemsCount"
        class="site-nav__cart-count"
      >
        {{ lineItemsCount }}
      </small>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('checkout', [
      'lineItemsCount'
    ])
  }
}
</script>

<style>
.site-nav {
  display: flex;
  justify-content: center;
  margin-top: calc(var(--phi) * 2em);
}

.site-nav__link {
  position: relative;
  margin-left: var(--gutter);
  margin-right: var(--gutter);
  display: block;
}

.site-nav__cart-count {
  position: absolute;
  right: -1rem;
  top: -.4rem;;
  font-size: 1rem;
}
</style>
