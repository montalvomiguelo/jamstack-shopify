import gql from 'graphql-tag'
import CheckoutFragment from '~/apollo/fragments/CheckoutFragment'

export default gql`
  query($id: ID!) {
    node(id: $id) {
      ...CheckoutFragment
    }
  }
  ${CheckoutFragment}
`
