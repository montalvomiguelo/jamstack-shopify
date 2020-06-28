<template>
  <product-list :products="products" />
</template>

<script>
import { mapState } from 'vuex'
import ProductList from '~/components/ProductList.vue'

export default {
  components: {
    ProductList
  },
  async fetch ({ store, error }) {
    try {
      await store.dispatch('shop/fetchShopAndCollection', 'frontpage')
    } catch (e) {
      error({ statusCode: 404, message: 'Collection not found' })
    }
  },
  computed: {
    ...mapState({
      name: state => state.shop.name,
      description: state => state.shop.description,
      collection: state => state.shop.collection
    }),
    products () {
      return this.collection.products.edges
    }
  },
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>

<style>
</style>
