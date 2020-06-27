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
import productQuery from '~/apollo/queries/product'

export default {
  async asyncData (context) {
    const client = context.app.apolloProvider.defaultClient

    const { data } = await client.query({
      query: productQuery,
      variables: {
        handle: context.route.params.handle
      }
    })

    return {
      product: data.product
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
