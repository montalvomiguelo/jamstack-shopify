<template>
  <nav class="mt-12 flex justify-center text-xl">
    <nuxt-link :to="{ name: 'index' }" class="mx-8">
      Shop
    </nuxt-link>
    <nuxt-link :to="{ name: 'cart' }" class="relative mx-8">
      Cart
      <small
        v-if="lineItemsCount"
        class="absolute -top-1 -right-4 text-base"
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
