import Head from "next/head";

import { gql, useQuery } from "@apollo/client";
export default function shop() {
  // get the query from graphql
  const sktTest = gql`
  {
    posts {
      data {
        attributes {
          title
          description
          published
          deliverable
          Price
          photo{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
  
  `;
 
  const { data } = useQuery(sktTest);
  
   console.log(
     "gql heree",
     data?.posts?.data.map((el) => el.attributes.title)
   );

  const products =data?.posts?.data;
 
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
      <h1>about me</h1>

      <p>here i display products that i sell from my strapi api</p>
      <div>
        {products?.length} items total
        {products?.map((product, index) => (
          <div key={product.attributes.id} className="bg-white">
            {" "}
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              {" "}
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                {product.attributes?.title}
              </h2>{" "}
              <p className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                description: {product.attributes?.description}
              </p>{" "}
              <img
                src={`http://localhost:1337${product?.attributes?.photo?.data?.attributes?.url}`}
                alt="template"
                className=" object-center object-cover  w-260 h-full"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Released date:{product.attributes?.published}
                    </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    shipping:
                    {product.attributes?.deliverable
                      ? "can be sent"
                      : "not available"}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  price:{product.attributes?.Price} $
                </p>
              </div>
              <button className="btn-indigo">add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

