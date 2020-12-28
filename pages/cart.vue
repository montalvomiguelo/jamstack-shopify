<template>
  <div class="max-w-lg mx-auto">
    <h1 class="mb-10 text-4xl text-center">
      Your Cart
    </h1>

    <div class="">
      <div v-if="lineItems">
        <ul class="mb-6">
          <li
            v-for="item in lineItems"
            :key="item.node.id"
            class="table table-fixed w-full py-6 border-b border-current border-solid"
          >
            <span class="table-cell">
              <nuxt-link :to="{ name: 'products-handle', params: { handle: item.node.variant.product.handle }}">
                {{ item.node.title }}
              </nuxt-link>
            </span>
            <span class="table-cell text-center">&times; {{ item.node.quantity }}</span>
            <span class="table-cell text-right">{{ item.node.variant.priceV2.amount | money }}</span>
          </li>
        </ul>
        <p class="flex mb-10 justify-between text-2xl">
          Subtotal <span>{{ subtotalPrice | money }}</span>
        </p>
        <a class="block px-8 py-4 bg-black text-white text-center" :href="webUrl">Checkout</a>
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
