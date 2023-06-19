import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useTheme,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Container from "./styles/Container";
import { SearchIcon } from "@chakra-ui/icons";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Container backgroundColor={theme.colors.secondary["500"]}>
      <Navigation />
      <InputGroup w="xs">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input variant="filled" fontSize="md" width="xs" placeholder="Search" />
      </InputGroup>
      <UserMenu />
    </Container>
  );
};

export default Header;
