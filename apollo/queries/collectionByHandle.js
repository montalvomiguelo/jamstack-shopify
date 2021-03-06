import gql from 'graphql-tag'
import CollectionFragment from '~/apollo/fragments/CollectionFragment'
import CollectionsProductsFragment from '~/apollo/fragments/CollectionsProductsFragment'

export default gql`
  query($handle: String!) {
    collection: collectionByHandle(handle: $handle) {
      ...CollectionFragment
      ...CollectionsProductsFragment
    }
  }
  ${CollectionFragment}
  ${CollectionsProductsFragment}
`
