<template>
  <div class="cart">
    <h1 class="cart__title">
      Your Cart
    </h1>

    <div class="cart__content">
      <div v-if="lineItems">
        <ul class="cart__items">
          <li
            v-for="item in lineItems"
            :key="item.node.id"
            class="cart__item"
          >
            <span class="cart__item__title">
              <nuxt-link :to="{ name: 'products-handle', params: { handle: item.node.variant.product.handle }}">
                {{ item.node.title }}
              </nuxt-link>
            </span>
            <span class="cart__item__quantity">&times; {{ item.node.quantity }}</span>
            <span class="cart__item__price">{{ item.node.variant.priceV2.amount | money }}</span>
          </li>
        </ul>
        <p class="cart__item__subtotal">
          Subtotal <span>{{ subtotalPrice | money }}</span>
        </p>
        <a class="cart__button button" :href="webUrl">Checkout</a>
      </div>
      <nuxt-link v-else :to="{ name: 'index' }" class="cart__button button">
        Start Shopping
      </nuxt-link>
    </div>
  </div>
</template>

<style>
.cart__title {
  text-align: center;
  margin-bottom: var(--gutter);
}

.cart__items {
  margin-bottom: var(--gutter);
}

.cart__item__subtotal {
  margin-bottom: var(--gutter);
  display: flex;
  justify-content: space-between;
  font-size: var(--gutter);
}

.cart__item {
  padding-bottom: var(--gutter);
  padding-top: var(--gutter);
  display: table;
  width: 100%;
  border-top: 1px solid;
  table-layout: fixed;
}

.cart__item:last-child {
  border-bottom: 1px solid;
}

.cart__item__title {
  display: table-cell;
}

.cart__item__quantity {
  display: table-cell;
  text-align: center;
}

.cart__item__price {
  display: table-cell;
  text-align: right;
}

.cart__button {
  display: block;
  text-align: center;
}

@media (min-width: 576px) {
  .cart__button,
  .cart__content {
    max-width: calc(100% / var(--phi));
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

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
