import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const Gender = () => {
  const { t } = useTranslation();

  return (
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          {t("Gender")}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>men woman</AccordionPanel>
    </AccordionItem>
  );
};

export default Gender;
