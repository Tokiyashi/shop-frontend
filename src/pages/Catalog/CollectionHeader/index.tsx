import React from "react";
import Container from "./styles/Container";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const CollectionHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text>{t("Summer Collection")}</Text>
      <Box display="flex" gap="2rem">
        <Text>{t("New")}</Text>
        <Text>{t("Recommended")}</Text>
      </Box>
    </Container>
  );
};

export default CollectionHeader;
