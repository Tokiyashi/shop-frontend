import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const Size = () => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Size
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>m l xl 2xl</AccordionPanel>
    </AccordionItem>
  );
};

export default Size;
