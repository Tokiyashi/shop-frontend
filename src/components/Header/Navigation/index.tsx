import { Box, Text } from "@chakra-ui/react";
import { ptr } from "../../../utils/pxToRem";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" w="md" justifyContent="space-between">
      <Text fontSize="xl">{t("Shop")}</Text>
      <Text fontSize="xl">{t("Collections")}</Text>
      <Text fontSize="xl">{t("Combos")}</Text>
      <Text fontSize="xl">{t("Accessories")}</Text>
    </Box>
  );
};

export default Navigation;
