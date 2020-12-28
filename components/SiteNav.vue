<template>
  <nav class="">
    <nuxt-link :to="{ name: 'index' }" class="">
      Shop
    </nuxt-link>
    <nuxt-link :to="{ name: 'cart' }" class="">
      Cart
      <small
        v-if="lineItemsCount"
        class=""
      >
        {{ lineItemsCount }}
      </small>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('checkout', [
      'lineItemsCount'
    ])
  },
  mounted () {
    const checkoutId = this.$cookies.get('checkoutId')

    if (checkoutId) {
      this.fetchCheckout(checkoutId)
    }
  },
  methods: {
    ...mapActions('checkout', [
      'fetchCheckout'
    ])
  }
}
</script>
