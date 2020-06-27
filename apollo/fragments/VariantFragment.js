import gql from 'graphql-tag'

export default gql`
  fragment VariantFragment on ProductVariant {
    id
    title
    priceV2 {
      amount
      currencyCode
    }
    presentmentPrices(first: 20) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
        }
      }
    }
    weight
    availableForSale
    sku
    compareAtPriceV2 {
      amount
      currencyCode
    }
    image {
      id
      originalSrc
      altText
    }
    selectedOptions {
      name
      value
    }
  }
`
