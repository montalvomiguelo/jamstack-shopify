import gql from 'graphql-tag'
import CollectionFragment from '~/apollo/fragments/CollectionFragment'
import CollectionsProductsFragment from '~/apollo/fragments/CollectionsProductsFragment'

export default gql`
  query($handle: String!) {
    shop {
      paymentSettings {
        currencyCode
        enabledPresentmentCurrencies
      }
      description
      moneyFormat
      name
      primaryDomain {
        host
        sslEnabled
        url
      }
    }
    collection: collectionByHandle(handle: $handle) {
      ...CollectionFragment
      ...CollectionsProductsFragment
    }
  }
  ${CollectionFragment}
  ${CollectionsProductsFragment}
`
