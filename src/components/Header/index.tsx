import {
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Container from "./styles/Container";
import { SearchIcon } from "@chakra-ui/icons";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import { useUser } from "../../utils/store/user";

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const location = useLocation();

  if (location.pathname.includes("auth")) {
    return <></>;
  }

  return (
    <Container backgroundColor={theme.colors.secondary["500"]}>
      <Text fontSize="36"> Bears Bento </Text>
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
