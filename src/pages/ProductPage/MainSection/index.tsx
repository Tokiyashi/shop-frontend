import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Product } from "../../../common/types/Product";
import { ptr } from "../../../utils/pxToRem";
import { noImage } from "../../../common/constants/noImage";
import ProductImage from "./styles/ProductImage";

type Props = {
  product: Product;
};

const MainSection = ({ product }: Props) => {
  return (
    <Box w="100%" display="flex" gap="2rem" h={ptr(785)} alignItems="center">
      <ProductImage src={product?.imageUrl || noImage} />
      <Box
        h="100%"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Text fontSize={ptr(60)}>{product?.name}</Text>
      </Box>
    </Box>
  );
};

export default MainSection;
