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
  margin-top: var(--gutter);
  text-align: center;
}

.product-details__title {
  margin-bottom: 1rem;
}

.product-details__price {
  margin-bottom: var(--gutter);
}

.product-details__description {
  margin-top: calc(var(--gutter) * 2);
  line-height: var(--phi);
  text-align: left;
}

@media (min-width: 576px) {
  .product-details__description {
    max-width: calc(100% / var(--phi));
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 768px) {
  .product-details {
    max-width: calc(100% / var(--phi));
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
