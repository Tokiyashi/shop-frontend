import React from "react";
import { Box, useTheme } from "@chakra-ui/react";
import { ptr } from "../../utils/pxToRem";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      w="100%"
      backgroundColor={theme.colors.primary["500"]}
      h={ptr(331)}
    ></Box>
  );
};

export default Footer;
