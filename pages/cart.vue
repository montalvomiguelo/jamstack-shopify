<template>
  <div class="">
    <h1 class="">
      Your Cart
    </h1>

    <div class="">
      <div v-if="lineItems">
        <ul class="">
          <li
            v-for="item in lineItems"
            :key="item.node.id"
            class=""
          >
            <span class="">
              <nuxt-link :to="{ name: 'products-handle', params: { handle: item.node.variant.product.handle }}">
                {{ item.node.title }}
              </nuxt-link>
            </span>
            <span class="">&times; {{ item.node.quantity }}</span>
            <span class="">{{ item.node.variant.priceV2.amount | money }}</span>
          </li>
        </ul>
        <p class="">
          Subtotal <span>{{ subtotalPrice | money }}</span>
        </p>
        <a class="" :href="webUrl">Checkout</a>
      </div>
      <nuxt-link v-else :to="{ name: 'index' }" class="">
        Start Shopping
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatMoney } from '@shopify/theme-currency'

export default {
  filters: {
    money (value) {
      const cents = value * 100
      return formatMoney(cents)
    }
  },
  async fetch ({ store, app }) {
    const checkoutId = app.$cookies.get('checkoutId')

    if (checkoutId) {
      await store.dispatch('checkout/fetchCheckout', checkoutId)
    }
  },
  computed: {
    ...mapGetters('checkout', [
      'lineItems',
      'subtotalPrice',
      'webUrl'
    ])
  }
}
</script>
