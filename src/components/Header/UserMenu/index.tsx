import { Box, IconButton, Wrap } from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const UserMenu = () => {
  return (
    <Box display="flex" gap={2}>
      <IconButton aria-label="Featured" icon={<AiOutlineHeart />} />
      <IconButton aria-label="User" icon={<AiOutlineUser />} />
      <IconButton aria-label="Cart" icon={<AiOutlineShoppingCart />} />
    </Box>
  );
};

export default UserMenu;
