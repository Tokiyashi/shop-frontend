import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

type Props = {
  src: string;
};

const ProductImage = styled(Box)`
  display: flex;
  background: url(${({ src }: Props) => src}) no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
`;
export default ProductImage;
