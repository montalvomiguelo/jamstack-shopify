<template>
  <div
    class="product-card"
  >
    <nuxt-link :to="{ name: 'products-handle', params: { handle: product.node.handle }}" class="product-card__image-link">
      <img
        :src="featuredImageSrc"
        :alt="product.node.title"
        loading="lazy"
        class="product-card__image"
      >
    </nuxt-link>
    <p class="product-card__title">
      <nuxt-link :to="{ name: 'products-handle', params: { handle: product.node.handle }}">
        {{ product.node.title }}
        <br>
        <span class="h4">{{ product.node.price }}</span>
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { getSizedImageUrl } from '@shopify/theme-images'

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
    }
  }
}
</script>

<style>
.product-card__image-link {
  position: relative;
  display: block;
  background-color: #F2F2F2
}

.product-card__image-link::before {
  content: "";
  padding-top: 100%;
  display: block;
}

.product-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-card__title {
  margin-top: calc(1.618em / 2);
  text-align: center;
}
</style>
