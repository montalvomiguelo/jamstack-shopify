import checkoutCreate from '~/apollo/mutations/checkoutCreate'
import checkoutLineItemsAdd from '~/apollo/mutations/checkoutLineItemsAdd'
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
  addItem ({ dispatch, getters }, payload) {
    if (!getters.checkoutId) {
      return dispatch('checkoutCreate', payload)
    }

    dispatch('checkoutItemAdd', payload)
  },
  checkoutItemAdd ({ commit, getters }, { id: variantId, quantity }) {
    return this.app.apolloProvider.defaultClient.mutate({
      mutation: checkoutLineItemsAdd,
      variables: {
        lineItems: [{ variantId, quantity }],
        checkoutId: getters.checkoutId
      }
    }).then(({ data: { checkoutLineItemsAdd: { checkout } } }) => {
      commit('SET_CHECKOUT', checkout)
    })
  },
  checkoutCreate ({ commit, dispatch }, { id: variantId, quantity }) {
    return this.app.apolloProvider.defaultClient.mutate({
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
  },
  checkoutId: (state) => {
    return state.checkout.id
  },
  lineItemsCount: (state, getters) => {
    if (!getters.lineItems) {
      return
    }

    return getters.lineItems.reduce((quantity, item) => {
      quantity += item.node.quantity
      return quantity
    }, 0)
  },
  subtotalPrice: (state) => {
    return state.checkout.subtotalPrice
  },
  webUrl: (state) => {
    return state.checkout.webUrl
  }
}
