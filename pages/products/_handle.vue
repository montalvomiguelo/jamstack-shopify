<template>
  <div class="container">
    <div>
      <h1 class="subtitle">
        {{ product.title }}
      </h1>
    </div>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
