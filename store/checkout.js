import checkoutCreate from '~/apollo/mutations/checkoutCreate'

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
