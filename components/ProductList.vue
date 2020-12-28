<template>
  <ul class="">
    <li
      v-for="product in products"
      :key="product.node.id"
      class=""
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
