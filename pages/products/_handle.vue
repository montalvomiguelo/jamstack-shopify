<template>
  <div>
    <h1 class="subtitle">
      {{ product.title }}
    </h1>
  </div>
</template>

<script>
import productByHandle from '~/apollo/queries/productByHandle'

export default {
  async asyncData (context) {
    try {
      const client = context.app.apolloProvider.defaultClient

      const { data } = await client.query({
        query: productByHandle,
        variables: {
          handle: context.route.params.handle
        }
      })

      if (!data.product) {
        context.error({ statusCode: 404, message: 'Product not found' })
      }

      return {
        product: data.product
      }
    } catch (e) {
      context.error({ statusCode: 404, message: 'Product not found' })
    }
  },
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
