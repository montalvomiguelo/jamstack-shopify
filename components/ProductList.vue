<template>
  <ul class="-mx-1 md:-mx-3 flex flex-wrap">
    <li
      v-for="product in products"
      :key="product.node.id"
      class="w-1/2 md:w-1/3 px-1 md:px-3 mb-6"
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
