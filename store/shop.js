import shopAndCollectionByHandle from '~/apollo/queries/shopAndCollectionByHandle'

export const state = () => ({
  name: '',
  description: '',
  products: []
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
    const client = this.app.apolloProvider.defaultClient

    return client.query({
      query: shopAndCollectionByHandle,
      variables: {
        handle
      }
    }).then(({ data }) => {
      if (!data.shop || !data.collection) {
        throw new Error('Collection not found')
      }

      const { shop, collection } = data

      commit('SET_NAME', shop.name)
      commit('SET_DESCRIPTION', shop.description)
      commit('SET_COLLECTION', collection)
    })
  }
}
