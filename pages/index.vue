<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ catalog.title }}
      </h1>
      <h2 class="subtitle">
        {{ catalog.description }}
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
import catalog from '~/apollo/queries/catalog'
import shop from '~/apollo/queries/shop'

export default {
  components: {
    Logo
  },
  apollo: {
    catalog: {
      prefetch: true,
      query: catalog
    },
    shop: {
      prefetch: true,
      query: shop
    }
  },
  computed: {
    products () {
      return this.catalog.products.edges
    }
  },
  head () {
    const title = this.shop ? this.shop.name : ''
    const content = this.shop ? this.shop.description : ''

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content
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
