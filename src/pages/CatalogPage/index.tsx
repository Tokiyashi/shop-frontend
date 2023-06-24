import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Cards from "./Cards";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../query/product";
import Filters from "./Filters";
import Page from "../../common/styles/Page";
import Container from "./styles/Container";
import CollectionHeader from "./CollectionHeader";
import { ptr } from "../../utils/pxToRem";

const CatalogPage = () => {
  const { data, loading } = useQuery(GET_ALL_PRODUCTS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Page>
      <Container>
        <Filters />
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          padding={`0 ${ptr(50)}`}
        >
          <CollectionHeader />
          {!loading && <Cards products={data?.products || []} />}
        </Box>
      </Container>
    </Page>
  );
};

export default CatalogPage;
