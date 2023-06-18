import { Box, Text } from "@chakra-ui/react";
import { ptr } from "../../../utils/pxToRem";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" w="md" justifyContent="space-between">
      <Text fontSize={ptr(22)}>{t("Shop")}</Text>
      <Text fontSize={ptr(22)}>{t("Men")}</Text>
      <Text fontSize={ptr(22)}>{t("Women")}</Text>
      <Text fontSize={ptr(22)}>{t("Combos")}</Text>
      <Text fontSize={ptr(22)}>{t("Joggers")}</Text>
    </Box>
  );
};

export default Navigation;
