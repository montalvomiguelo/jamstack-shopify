import gql from 'graphql-tag'
import ProductFragment from '~/apollo/fragments/ProductFragment'
import CollectionFragment from '~/apollo/fragments/CollectionFragment'

export default gql`
  query($handle: String!) {
    collection: collectionByHandle(handle: $handle) {
      ...CollectionFragment
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
  }
  ${ProductFragment}
  ${CollectionFragment}
`
