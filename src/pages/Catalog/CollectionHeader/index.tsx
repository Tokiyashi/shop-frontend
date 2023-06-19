import React from "react";
import Container from "./styles/Container";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const CollectionHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text fontSize="xl">{t("Summer Collection")}</Text>
      <Box display="flex" gap="2rem">
        <Text fontSize="xl">{t("New")}</Text>
        <Text fontSize="xl">{t("Recommended")}</Text>
      </Box>
    </Container>
  );
};

export default CollectionHeader;
