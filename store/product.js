import { getSizedImageUrl } from '@shopify/theme-images'
import { formatMoney } from '@shopify/theme-currency'
import productByHandle from '~/apollo/queries/productByHandle'

export const state = () => ({
  product: {},
  selectedVariantId: null
})

export const mutations = {
  SET_PRODUCT (state, product) {
    state.product = product
  },
  SET_SELECTED_VARIANT_ID (state, id) {
    state.selectedVariantId = id
  }
}

export const actions = {
  fetchProduct ({ commit, getters }, handle) {
    return this.$graphql.request(productByHandle, { handle })
      .then((data) => {
        const { product } = data

        if (!product) {
          throw new Error('Product not found')
        }

        commit('SET_PRODUCT', product)
        commit('SET_SELECTED_VARIANT_ID', getters.firstVariant.id)
      })
  },
  updateSelectedVariantId ({ commit }, variantId) {
    commit('SET_SELECTED_VARIANT_ID', variantId)
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
  },
  variants: (state) => {
    return state.product.variants.edges
  },
  firstVariant: (state, getters) => {
    return getters.variants[0].node
  },
  hasOnlyDefaultVariant: (state, getters) => {
    return (
      getters.variants.length === 1 &&
      ~getters.firstVariant.title.indexOf('Default')
    )
  },
  selectedVariant: (state, getters) => {
    return getters.variants.find(variant => (
      variant.node.id === state.selectedVariantId
    ))
  },
  selectedVariantPrice: (state, getters) => {
    const cents = getters.selectedVariant.node.priceV2.amount * 100

    return formatMoney(cents)
  }
}
