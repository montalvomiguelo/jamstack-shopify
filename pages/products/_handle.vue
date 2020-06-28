<template>
  <div class="product">
    <product-featured />
    <product-details />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductFeatured from '~/components/ProductFeatured.vue'
import ProductDetails from '~/components/ProductDetails.vue'

export default {
  components: {
    ProductFeatured,
    ProductDetails
  },
  async fetch ({ store, error, params }) {
    try {
      await store.dispatch('product/fetchProduct', params.handle)
    } catch (e) {
      error({ statusCode: 404, message: 'Product not found' })
    }
  },
  computed: mapState({
    product: state => state.product.product
  }),
  head () {
    return {
      title: this.product.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description
        }
      ]
    }
  }
}
</script>

<style>
</style>
