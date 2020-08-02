import gql from 'graphql-tag'
import VariantFragment from '~/apollo/fragments/VariantFragment'

export default gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    subtotalPrice
    totalPrice
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          quantity
          variant {
            ...VariantFragment
            product {
              id
              handle
            }
          }
        }
      }
    }
  }
  ${VariantFragment}
`
