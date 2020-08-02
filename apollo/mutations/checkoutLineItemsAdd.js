import gql from 'graphql-tag'
import CheckoutFragment from '~/apollo/fragments/CheckoutFragment'

export default gql`
  mutation($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`
