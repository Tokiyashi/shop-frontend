import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { ptr } from "../../utils/pxToRem";

const Page = styled(Box)`
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  width: 100%;
  padding: 0 ${ptr(100)};
  min-height: 100vh;
  align-items: center;
`;
export default Page;
