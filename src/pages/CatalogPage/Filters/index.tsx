import React from "react";
import { Accordion, Text, useTheme } from "@chakra-ui/react";
import { ptr } from "../../../utils/pxToRem";
import { useTranslation } from "react-i18next";
import Gender from "./Gender";
import Size from "./Size";

const Filters = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Accordion
      padding="2rem 0"
      borderRadius={ptr(24)}
      backgroundColor={theme.colors.secondary["500"]}
      allowMultiple
      w={ptr(300)}
      h="min-content"
      alignItems="center"
    >
      <Text fontSize="xl" margin="auto" w="min-content">
        {t("Фильтры")}
      </Text>
      <Gender />
      <Size />
    </Accordion>
  );
};

export default Filters;
