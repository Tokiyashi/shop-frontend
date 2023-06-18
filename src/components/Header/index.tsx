import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ptr } from "../../utils/pxToRem";
import Container from "./styles/Container";
import { SearchIcon } from "@chakra-ui/icons";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Container backgroundColor={theme.colors.primary["500"]}>
      <Navigation />
      <InputGroup w="xs">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input variant="filled" width="xs" placeholder="Search" />
      </InputGroup>
      <UserMenu />
    </Container>
  );
};

export default Header;
