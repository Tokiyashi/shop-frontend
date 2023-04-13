import React from 'react';
import {CardBody, CardFooter, Image, Text} from "@chakra-ui/react";
import StyledCard from "./styles/StyledCard";
import {useTranslation} from "react-i18next";
import {StarIcon} from "@chakra-ui/icons";

const ProductCard = () => {
  const {t} = useTranslation()
  return (
    <StyledCard>
      <Image
        borderRadius='1rem'
        src='https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'/>
      <CardBody>
        <Text>
          {t('ZARA Oversize heavy Weight T-Shirt')}
        </Text>
      </CardBody>
      <CardFooter>
        <StarIcon color='orange'/>
        <Text>
          5.0 1.2k {t('Reviews')}
        </Text>

      </CardFooter>
    </StyledCard>
  );
};

export default ProductCard;