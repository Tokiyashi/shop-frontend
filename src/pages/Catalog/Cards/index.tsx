import React from 'react';
import {Box} from "@chakra-ui/react";
import ProductCard from './ProductCard';
import {Product} from '../../../common/types/Product';

type Props = {
  products: Product[]
}

const Cards = ({products}: Props) => {
  return (
    <Box flexWrap='wrap' gap='2rem' display={'flex'} w={'100%'} justifyContent='space-between'>
      {products.map(item =>
        <ProductCard/>
      )}
    </Box>
  );
};

export default Cards;