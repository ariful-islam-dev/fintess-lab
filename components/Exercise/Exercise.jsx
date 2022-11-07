import { gql } from '@apollo/client';

export default function Exercise({ data }) {
  console.log('FROM TEST EXERCISE', data.products);
  return (
    <>
      <h1>This is Exercise</h1>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: { data },
  };
};
