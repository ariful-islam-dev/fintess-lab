import { gql } from "@apollo/client";


export const GET_PRODUCT = gql`
query getProducts($page: Int! ) {
    products(pagination: {page: $page, pageSize: 12}){
      data{
        id,
        attributes{
          title, 
          price,
          discount_price,
         
         thumbnails{
          data{
            id,
            attributes{
              url
            }
          }
         }
        }
      },
      meta{
        pagination{
          page,pageSize,pageCount,total

        }
      }
    }
  }
`


      
export const GET_PRODUCTS =gql `
query Products{    
  products{
      data{
        id,
        attributes{
          title, 
          price,
          discount_price,
         
         thumbnails{
          data{
            id,
            attributes{
              url
            }
          }
         }
        }
      },
  meta {
    pagination{
      page,
      pageSize,
      pageCount, 
      total
    }
  }
  }
}`
   

// GET All Brand Name

export const GET_BRANDS = gql`
query Brands{    
  brands{
    data {
      id,
      attributes {
       name
      }
    }
  }
}
      
`


export const GET_MATERIALS = gql`
query{    
  metarials{
    data {
      id,
      attributes{
        name
      }
     
      }
  }
}
      
`

export const GET_PRODUCT_BY_ID=gql`
query Product($id: ID!){
  product(id: $id){
    data{
      id,
      attributes{
        title, 
        price,
        discount_price,
        description,
        stock,
        
        thumbnails{
          data{
            id,
            attributes {
              url
            }
          }
        },
        categories{
          data{
            id,
              attributes{
                Type, Name
              }
            
          }
        },
        brand{
          data{
            id,
            attributes{
              name
            }
          }
        },
        warranty{
          data{
            id,
            attributes{
              period
            }
          }
        },
        metarial{
          data{
            id,
            attributes{
              name
            }
          }
        },
        colors{
          data{
            id,
            attributes{
              name
            }
          }
        },
        sizes{
          data{
            id,
            attributes{
              kind
            }
          }
        }
      }
    }
  }
}
`