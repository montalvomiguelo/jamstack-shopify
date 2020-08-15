export const actions = {
  async nuxtServerInit ({ dispatch }, { app }) {
    const checkoutId = app.$cookies.get('checkoutId')

    if (checkoutId) {
      await dispatch('checkout/fetchCheckout', checkoutId)
    }
  }
}
