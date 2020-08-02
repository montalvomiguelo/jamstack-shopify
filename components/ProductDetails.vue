<template>
  <div class="product-details">
    <h1 class="h1 product-details__title">
      {{ title }}
    </h1>
    <p class="product-details__price">
      {{ selectedVariantPrice }}
    </p>
    <product-form />
    <div class="product-details__description" v-html="descriptionHtml" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductForm from '~/components/ProductForm.vue'

export default {
  components: {
    ProductForm
  },
  computed: mapGetters('product', [
    'title',
    'descriptionHtml',
    'selectedVariant',
    'selectedVariantPrice'
  ])
}
</script>

<style>
.product-details {
  margin-top: 1.618em;
  text-align: center;
}

.product-details__title {
  margin-bottom: 1rem;
}

.product-details__price {
  margin-bottom: calc(1.618em / 2);
}

.product-details__description {
  margin-top: calc(1.618em * 2);
  line-height: 1.618;
  text-align: left;
}

@media (min-width: 576px) {
  .product-details__description {
    max-width: calc(100% / 1.618);
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 768px) {
  .product-details {
    max-width: calc(100% / 1.618);
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
