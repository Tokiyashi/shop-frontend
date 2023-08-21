import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../query/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../utils/store/user";

const LoginForm = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const updateUser = useUser((state) => state.updateUser);
  const handleSubmit = async () => {
    updateUser({
      email: "asdsad@sdfsd.com",
      name: "NIkite",
      password: "228",
      phone: "123123123",
    });
    navigate("/catalog");
  };

  const handleValueChange =
    (field: string) => (newValue: { target: { value: string } }) =>
      setUser({ ...user, [field]: newValue.target.value });

  return (
    <Stack margin="auto" w="lg">
      <Text fontWeight="bold" fontSize="30">
        Войдите или зарегистрируйтесь
      </Text>
      <Input
        value={user.email}
        onChange={handleValueChange("email")}
        placeholder="Адрес электронной почты"
        type="email"
      />
      <Input
        value={user.password}
        placeholder="Пароль"
        type="password"
        onChange={handleValueChange("password")}
      />
      <Button disabled={loading} onClick={handleSubmit}>
        Войти
      </Button>
    </Stack>
  );
};

export default LoginForm;
