import React from "react";
import { Wrap } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Product } from "../../../common/types/Product";

type Props = {
  products: Product[];
};

const Cards = ({ products }: Props) => {
  return (
    <Wrap w="100%">
      {[...products, ...products, ...products].map((item, index) => (
        <ProductCard product={item} key={index} />
      ))}
    </Wrap>
  );
};

export default Cards;
