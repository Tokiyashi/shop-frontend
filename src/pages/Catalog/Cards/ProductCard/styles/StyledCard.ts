import { Card } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  display: flex;
  width: 32%;
  padding: 0;
  max-height: 25rem;
  box-shadow: none;
  gap: 1rem;
  min-width: 15rem;
  max-width: 20rem;
  @media (max-width: 760px) {
    width: 100%;
  }
  //
  //@media (min-width: 1400px) {
  //  width: 20%;
  //}
`;

export default StyledCard;
