import {gql} from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
query ExampleQuery {
  products {
    name
    rating
    imageUrl
  }
}
`