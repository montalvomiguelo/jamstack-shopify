import gql from 'graphql-tag'

export default gql`
  fragment CollectionFragment on Collection {
    id
    handle
    description
    descriptionHtml
    updatedAt
    title
    image {
      id
      originalSrc
      altText
    }
  }
`
