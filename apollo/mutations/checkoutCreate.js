import gql from 'graphql-tag'
import CheckoutFragment from '~/apollo/fragments/CheckoutFragment'

export default gql`
  mutation($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`
