import React from "react";
import Page from "../../common/styles/Page";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../query/product";
import MainSection from "./MainSection";

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: { inputId: id },
  });
  const product = data?.product;

  if (loading) {
    return (
      <Page>
        <Spinner />
      </Page>
    );
  }

  return (
    <Page>
      <MainSection product={product} />
    </Page>
  );
};

export default ProductPage;
