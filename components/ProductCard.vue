<template>
  <div
    class=""
  >
    <nuxt-link :to="{ name: 'products-handle', params: { handle: product.node.handle }}" class="">
      <img
        :src="featuredImageSrc"
        :alt="product.node.title"
        loading="lazy"
        class=""
      >
    </nuxt-link>
    <p class="">
      <nuxt-link :to="{ name: 'products-handle', params: { handle: product.node.handle }}">
        {{ product.node.title }}
      </nuxt-link>
      <span class="">{{ price }}</span>
    </p>
  </div>
</template>

<script>
import { getSizedImageUrl } from '@shopify/theme-images'
import { formatMoney } from '@shopify/theme-currency'

export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    product: Object
  },
  computed: {
    featuredImage () {
      return this.product.node.images.edges[0].node
    },
    featuredImageSrc () {
      return getSizedImageUrl(this.featuredImage.src, '600x')
    },
    selectedVariant () {
      return this.product.node.variants.edges[0].node
    },
    price () {
      const cents = this.selectedVariant.priceV2.amount * 100
      return formatMoney(cents)
    }
  }
}
</script>
