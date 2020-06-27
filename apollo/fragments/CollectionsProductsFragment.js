import gql from 'graphql-tag'
import ProductFragment from '~/apollo/fragments/ProductFragment'

export default gql`
  fragment CollectionsProductsFragment on Collection {
    products(first: 20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${ProductFragment}
`
