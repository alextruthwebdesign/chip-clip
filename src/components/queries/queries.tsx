import { gql } from '@apollo/client';

const StorefrontFragments = gql`
  fragment StorefrontCollection on Shopify_Collection {
    id
    handle
    title
    description
    descriptionHtml
  }

  fragment StorefrontProduct on Shopify_Product {
    id
    handle
    title
    description
    descriptionHtml
    requiresSellingPlan
    featuredImage {
      id
      url(transform: { maxWidth: 300, maxHeight: 300, preferredContentType: WEBP })
      width
      height
      altText
    }
    priceRangeV2 {
      maxVariantPrice {
        currencyCode
        amount
      }
      minVariantPrice {
        currencyCode
        amount
      }
    }
    publishedAt
    totalVariants
    totalInventory
    sellingPlanGroupCount
    options {
      name
      position
      id
      values
    }
  }
`;

export const getHomePage = gql`
  ${StorefrontFragments}
  query GetStorefrontQuery {
    storefront: getStorefront {
      components {
        __typename
        ... on OffersComponent {
          offers {
            href
            name
            description
          }
        }
        ... on HeroComponent {
          primaryText
          secondaryText
          buttonText
          image {
            path
            description
          }
        }
        ... on TextSection {
            Button
            title
            Description
            left
            right
            center
            Image{
                path
            }
          }
          ... on Cta {
            Button
            title
            Description
          }
          ... on Gallery {
            Title
            Gallery:Image{
              path
            }
          }
        ... on CollectionsComponent {
          collections {
            name
            description
            href
            image {
              path
              description
            }
          }
        }
        ... on CollectionComponent {
          collection {
            shopifyCollection {
              ...StorefrontCollection
              products(first: 4) {
                pageInfo {
                  endCursor
                  startCursor
                  hasNextPage
                  hasPreviousPage
                }
                nodes {
                  ...StorefrontProduct
                }
              }
            }
          }
        }
        ... on BackgroundImageComponent {
          image {
            path
            description
          }
          components {
            __typename
            ... on SaleComponent {
              primaryText
              secondaryText
              buttonText
            }
            ... on TestimonialsComponent {
              testimonials {
                quote
                attribution
              }
            }
          }
        }
      }
    }
  }
`;