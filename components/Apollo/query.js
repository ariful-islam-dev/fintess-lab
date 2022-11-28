import { gql } from "@apollo/client";

export const HOME_PRODUCT = gql`
  query getProducts {
    products {
      data {
        id
        attributes {
          title
          price
          discount_price

          thumbnails {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCTS_BY_CATEGORY = gql`
  query ($Type: String, $Name: String, $page: Int, $pageSize: Int) {
    products(
      filters: { categories: { Type: { eq: $Type }, Name: { eq: $Name } } }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          title
          price
          discount_price
          description
          stock

          thumbnails {
            data {
              id
              attributes {
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                Type
                Name
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($pId: ID!) {
    product(id: $pId) {
      data {
        id
        attributes {
          title
          price
          discount_price
          description
          stock
          thumbnails {
            data {
              id
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Type
                Name
              }
            }
          }
          brand {
            data {
              attributes {
                name
              }
            }
          }
          warranty {
            data {
              attributes {
                period
              }
            }
          }
          metarial {
            data {
              attributes {
                name
              }
            }
          }
          colors {
            data {
              attributes {
                name
              }
            }
          }
          sizes {
            data {
              attributes {
                kind
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query Categories {
    categories {
      data {
        id
        attributes {
          Name
          Type
        }
      }
    }
  }
`;

export const GET_BRAND = gql`
query getBrands{
  brands{
    data{
      id,
      attributes{
        name
      }
    }
  }
  }
`;

export const GET_WARRANTY = gql`
  query {
    warranties {
      data {
        id
        attributes {
          period
        }
      }
    }
  }
`;

export const GET_MATERIALS = gql`
query getMetarials{
  metarials{
    data{
      id,
      attributes{
        name
      }
    }
  }
  }
`

export const GET_USER_PROFILE= gql`
  query getUserById($id: ID){
    usersPermissionsUser(id: $id){
      data{
        id,
        attributes{
          username,
          email, 
          profile{
            data{
              id,
              attributes{
                name, phone
              }
            }
          }
        }
      }
    }
  }
`