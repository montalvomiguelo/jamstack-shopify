<template>
  <div class="product-details">
    <h1 class="h1 product-details__title">
      {{ title }}
    </h1>
    <div class="product-details__description" v-html="descriptionHtml" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('product', [
    'title',
    'descriptionHtml'
  ])
}
</script>

<style>
.product-details {
  margin-top: 1.618em;
  text-align: center;
}

.product-details__description {
  margin-top: 1.618em;
  line-height: 1.618;
}

@media (min-width: 768px) {
  .product-details {
    max-width: calc(100% / 1.618);
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
