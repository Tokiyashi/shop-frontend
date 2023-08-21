import { Box, IconButton } from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../utils/store/user";

const UserMenu = () => {
  const navigate = useNavigate();
  const user = useUser((state) => state.user);

  return (
    <Box alignItems="center" display="flex" gap={2}>
      <IconButton aria-label="Featured" icon={<AiOutlineHeart />} />
      <IconButton
        onClick={() => navigate("/auth")}
        aria-label="User"
        icon={<AiOutlineUser />}
      />
      <IconButton aria-label="Cart" icon={<AiOutlineShoppingCart />} />
      {user.name}
    </Box>
  );
};

export default UserMenu;
