import React, {useEffect} from 'react';
import {Box} from "@chakra-ui/react";
import Cards from "./Cards";
import {useQuery} from '@apollo/client';
import {GET_ALL_PRODUCTS} from "../../query/product";

const Catalog = () => {
  const {data, loading} = useQuery(GET_ALL_PRODUCTS)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Box display='flex' w={'100%'}>
      <Cards products={data.products}/>
    </Box>
  );
};

export default Catalog;