import { Card } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  display: flex;
  width: 32%;
  padding: 0;
  max-height: 25rem;
  box-shadow: none;
  gap: 0;
  min-width: 15rem;
  max-width: 20rem;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export default StyledCard;
