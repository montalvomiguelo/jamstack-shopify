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
  },
  mounted () {
    const checkoutId = this.$cookies.get('checkoutId')

    if (checkoutId) {
      this.$store.dispatch('checkout/fetchCheckout', checkoutId)
    }
  }
}
</script>

<style>
.site-nav {
  display: flex;
  justify-content: center;
  margin-top: calc(1.618 * 2em);
}

.site-nav__link {
  position: relative;
  margin-left: 1.618em;
  margin-right: 1.618em;
  display: block;
}

.site-nav__cart-count {
  position: absolute;
  right: -1rem;
  top: -.4rem;;
  font-size: 1rem;
}
</style>
