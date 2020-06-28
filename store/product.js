import { getSizedImageUrl } from '@shopify/theme-images'
import productByHandle from '~/apollo/queries/productByHandle'

export const state = () => ({
  product: {}
})

export const mutations = {
  SET_PRODUCT (state, product) {
    state.product = product
  }
}

export const actions = {
  fetchProduct ({ commit }, handle) {
    const client = this.app.apolloProvider.defaultClient

    return client.query({
      query: productByHandle,
      variables: {
        handle
      }
    }).then(({ data }) => {
      const { product } = data

      if (!product) {
        throw new Error('Product not found')
      }

      commit('SET_PRODUCT', product)
    })
  }
}

export const getters = {
  images: (state) => {
    return state.product.images.edges
  },
  featuredImage: (state, getters) => {
    return getters.images[0].node
  },
  featuredImageSrc: (state, getters) => {
    return getSizedImageUrl(getters.featuredImage.src, '1024x')
  },
  title: (state) => {
    return state.product.title
  },
  descriptionHtml: (state) => {
    return state.product.descriptionHtml
  }
}
