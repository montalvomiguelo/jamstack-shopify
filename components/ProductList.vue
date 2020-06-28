<template>
  <ul class="product-list">
    <li
      v-for="product in products"
      :key="product.node.id"
      class="product-list__item"
    >
      <product-card
        :product="product"
      />
    </li>
  </ul>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    products: Array
  }
}
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(1.618em / -4);
  margin-right: calc(1.618em / -4);
  margin-bottom: -1.618em;
}

.product-list__item {
  margin-bottom: 1.618em;
  width: 50%;
  padding-left: calc(1.618em / 4);
  padding-right: calc(1.618em / 4);
}

@media (min-width: 768px) {
  .product-list {
    margin-left: calc(1.618em / -2);
    margin-right: calc(1.618em / -2);
  }

  .product-list__item {
    width: 33.33%;
    padding-left: calc(1.618em / 2);
    padding-right: calc(1.618em / 2);
  }
}
</style>
