<template>
  <product-list :products="products" />
</template>

<script>
import shopAndCollectionByHandle from '~/apollo/queries/shopAndCollectionByHandle'
import ProductList from '~/components/ProductList.vue'

export default {
  components: {
    ProductList
  },
  async asyncData (context) {
    try {
      const client = context.app.apolloProvider.defaultClient

      const { data } = await client.query({
        query: shopAndCollectionByHandle,
        variables: {
          handle: 'frontpage'
        }
      })

      if (!data.collection) {
        context.error({ statusCode: 404, message: 'Collection not found' })
      }

      return {
        collection: data.collection,
        shop: data.shop
      }
    } catch (e) {
      context.error({ statusCode: 404, message: 'Collection not found' })
    }
  },
  computed: {
    products () {
      return this.collection.products.edges
    }
  },
  head () {
    return {
      title: this.shop.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.shop.description
        }
      ]
    }
  }
}
</script>

<style>
</style>
