import shopAndCollectionByHandle from '~/apollo/queries/shopAndCollectionByHandle'

export const state = () => ({
  name: '',
  description: '',
  collection: []
})

export const mutations = {
  SET_NAME (state, name) {
    state.name = name
  },
  SET_DESCRIPTION (state, description) {
    state.description = description
  },
  SET_COLLECTION (state, collection) {
    state.collection = collection
  }
}

export const actions = {
  fetchShopAndCollection ({ commit }, handle) {
    return this.$graphql.request(shopAndCollectionByHandle, { handle })
      .then((data) => {
        const { shop, collection } = data

        if (!shop || !collection) {
          throw new Error('Collection not found')
        }

        commit('SET_NAME', shop.name)
        commit('SET_DESCRIPTION', shop.description)
        commit('SET_COLLECTION', collection)
      })
  }
}

export const getters = {
  products: (state) => {
    return state.collection.products.edges
  }
}
