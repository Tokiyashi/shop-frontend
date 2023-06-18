import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ptr } from "../../../utils/pxToRem";

const Container = styled(Box)`
  display: flex;
  height: ${ptr(108)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 ${ptr(100)};
`;
export default Container;
