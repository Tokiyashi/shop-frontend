import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../query/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUserForm = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    await createUser({
      variables: {
        input: {
          ...user,
        },
      },
    });
    navigate("/catalog");
  };

  const handleValueChange =
    (field: string) => (newValue: { target: { value: string } }) =>
      setUser({ ...user, [field]: newValue.target.value });

  return (
    <Stack margin="auto" w="lg">
      <Text fontWeight="bold" fontSize="30">
        Регистрация
      </Text>
      <Input
        value={user.name}
        onChange={handleValueChange("name")}
        placeholder="Имя"
        type="name"
      />
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
        Создать аккаунт
      </Button>
    </Stack>
  );
};

export default CreateUserForm;
