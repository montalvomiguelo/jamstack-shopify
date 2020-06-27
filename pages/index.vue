<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ collection.title }}
      </h1>
      <h2 class="subtitle">
        {{ collection.description }}
      </h2>
      <ul class="products">
        <li
          v-for="product in products"
          :key="product.node.id"
          class="product"
        >
          <nuxt-link :to="{ name: 'products-handle', params: { handle: product.node.handle }}">
            {{ product.node.title }}
          </nuxt-link>
        </li>
      </ul>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import collectionByHandle from '~/apollo/queries/collectionByHandle'

export default {
  components: {
    Logo
  },
  async asyncData (context) {
    try {
      const client = context.app.apolloProvider.defaultClient

      const { data } = await client.query({
        query: collectionByHandle,
        variables: {
          handle: 'all'
        }
      })

      if (!data.collection) {
        context.error({ statusCode: 404, message: 'Collection not found' })
      }

      return {
        collection: data.collection
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
      title: this.collection.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.collection.description
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
