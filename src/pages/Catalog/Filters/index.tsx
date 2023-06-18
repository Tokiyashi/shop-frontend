import React from "react";
import { Box, Collapse, useTheme } from "@chakra-ui/react";
import { ptr } from "../../../utils/pxToRem";

const Filters = () => {
  const theme = useTheme();

  return (
    <Box
      position="sticky"
      border={`${ptr(1)} solid ${theme.colors.gray["300"]}`}
      w={ptr(300)}
    >
      <Collapse defaultChecked={true}>Price</Collapse>
    </Box>
  );
};

export default Filters;
