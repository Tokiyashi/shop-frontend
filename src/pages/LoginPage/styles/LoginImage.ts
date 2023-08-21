import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import img from "../../../assets/loginpage.png";

const LoginImage = styled(Box)`
  display: flex;
  background: url(${img}) no-repeat center;
  background-size: cover;
  min-width: 50vw;
  min-height: 100vh;
`;
export default LoginImage;
