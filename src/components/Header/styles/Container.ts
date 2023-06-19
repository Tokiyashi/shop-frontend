import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ptr } from "../../../utils/pxToRem";

const Container = styled(Box)`
  display: flex;
  height: ${ptr(108)};
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  overflow: hidden;
  padding: 1rem 2rem;
  border-radius: ${ptr(24)};
  margin: ${ptr(20)} ${ptr(100)};
`;
export default Container;
