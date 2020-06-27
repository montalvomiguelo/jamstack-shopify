import gql from 'graphql-tag'
import ProductFragment from '~/apollo/fragments/ProductFragment'

export default gql`
  query($handle: String!) {
    product: productByHandle(handle: $handle) {
      ...ProductFragment
    }
  }
  ${ProductFragment}
`
