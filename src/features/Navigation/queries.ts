import { gql } from '@apollo/client';

export const NavigationQuery = gql`
  query NavigationQuery {
    navigation: getNavigation {
      Button
      Logo{
        path
      }
      messageHtml
      sections {
        name
        link {
          __typename
          ... on Collection {
            shopifyCollection {
              title
              handle
            }
          }
          ... on Product {
            shopifyProduct {
              title
              handle
            }
          }
          ... on Page {
            title
            slug
          }
          ... on Link {
            name
            href
          }
        }
        subsections {
          name
          links {
            __typename
            ... on Collection {
              shopifyCollection {
                title
                handle
              }
            }
            ... on Product {
              shopifyProduct {
                title
                handle
              }
            }
            ... on Page {
              title
              slug
            }
            ... on Link {
              name
              href
            }
          }
        }
      }
    }
  }
`;
