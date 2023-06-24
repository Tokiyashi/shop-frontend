import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      name
      rating
      imageUrl
      price
      id
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct {
    product(inputId: "64975ad07987803528f0af28") {
      name
      rating
      imageUrl
      price
      id
    }
  }
`;
