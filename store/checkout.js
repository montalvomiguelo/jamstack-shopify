import checkoutCreate from '~/apollo/mutations/checkoutCreate'
import checkoutNode from '~/apollo/queries/checkoutNode'

export const state = () => ({
  checkout: {}
})

export const mutations = {
  SET_CHECKOUT (state, checkout) {
    state.checkout = checkout
  }
}

export const actions = {
  addItem ({ dispatch }, payload) {
    dispatch('createCheckout', payload)
  },
  createCheckout ({ commit, dispatch }, { id: variantId, quantity }) {
    const client = this.app.apolloProvider.defaultClient

    return client.mutate({
      mutation: checkoutCreate,
      variables: {
        input: {
          lineItems: [{ variantId, quantity }]
        }
      }
    }).then(({ data: { checkoutCreate: { checkout } } }) => {
      dispatch('persistCheckoutId', checkout.id)
      commit('SET_CHECKOUT', checkout)
    })
  },
  persistCheckoutId (context, id) {
    this.$cookies.set('checkoutId', id)
  },
  fetchCheckout ({ commit }, id) {
    return this.app.apolloProvider.defaultClient.mutate({
      mutation: checkoutNode,
      variables: { id }
    }).then(({ data: { node } }) => {
      commit('SET_CHECKOUT', node)
    })
  }
}

export const getters = {
  lineItems: (state) => {
    if (!state.checkout.lineItems) {
      return
    }

    return state.checkout.lineItems.edges
  }
}
