import gql from 'graphql-tag'
import VariantFragment from '~/apollo/fragments/VariantFragment'

export default gql`
  fragment ProductFragment on Product {
    id
    availableForSale
    createdAt
    updatedAt
    descriptionHtml
    description
    handle
    productType
    title
    vendor
    publishedAt
    onlineStoreUrl
    options {
      name
      values
    }
    images(first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          src
          altText
        }
      }
    }
    variants(first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...VariantFragment
        }
      }
    }
  }
  ${VariantFragment}
`