import React from "react";
import { Button, CardBody, CardFooter, Text } from "@chakra-ui/react";
import StyledCard from "./styles/StyledCard";
import { useTranslation } from "react-i18next";
import { StarIcon } from "@chakra-ui/icons";
import { Product } from "../../../../common/types/Product";
import ProductImage from "./styles/ProductImage";
import { noImage } from "../../../../common/constants/noImage";
import { useNavigate } from "react-router-dom";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StyledCard>
      <ProductImage borderRadius="1rem" src={product?.imageUrl || noImage} />
      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem 0 0"
      >
        <Text fontSize="20px">{t(product.name)}</Text>
        <Button onClick={() => navigate(`/product/${product.id}`)}>
          <Text fontWeight="bold">${product?.price}</Text>
        </Button>
      </CardBody>
      <CardFooter display="flex" alignItems="center" padding="1rem 0 3rem">
        <StarIcon color="orange" />
        <Text>
          {product?.rating} (1.2k {t("Reviews")})
        </Text>
      </CardFooter>
    </StyledCard>
  );
};

export default ProductCard;
