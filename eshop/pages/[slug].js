import Head from "next/head";
import {gql, useQuery} from "@apollo/client";

// get the query from graphql


export default function Post({post}) {
  return (
    <div>
      <title title="Post" />
      <h1>{post}</h1>
     
    </div>
  );
}
const sktTestSingle = gql`
query Getblabla($id: ID!){
posts
  {
  data(id: $id) {
    attributes 
    {
      description
    }
  }
  }
}`

// tell next.js how many pages to render
export const getStaticPaths = async () => {
  const {data} = useQuery(sktTestSingle);
console.log(data);
  const res = await fetch("http://localhost:1337/api/posts");
  const posts = await res.json();
  
  const paths = posts.data.map((post) => ({
    params: { slug: post.attributes.title },
  }));


  return {
    paths,
    fallback: false,
  };
};

//for each individual page:get the data for that page
export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  // IN THIS PART I CAN'T FIND THE SLUG FROM MY API
  const res = await fetch(`http://localhost:1337/api/post/${slug}`);

  const posts = await res.json();
  console.log(posts);
   //convert the response to json
   //SO I CAN GIVE IT TO THE POST AS PARAMETERS
  const post = 'hardcoded example';
  return {
    props: { post },
  };
};
