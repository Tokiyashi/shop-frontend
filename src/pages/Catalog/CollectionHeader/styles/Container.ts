import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ptr } from "../../../../utils/pxToRem";

const Container = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${ptr(100)};
`;
export default Container;
