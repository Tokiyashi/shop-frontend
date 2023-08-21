import { useState } from "react";
import CreateUserForm from "../CreateUserForm";
import LoginForm from "../LoginForm";
import Container from "./styles/Container";
import { Box, Button, Text } from "@chakra-ui/react";

const AuthForm = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <Container margin="auto">
      {!isRegistered ? <CreateUserForm /> : <LoginForm />}
      {isRegistered ? (
        <Box display="flex" gap="1rem" alignItems="center">
          <Text>Ещё нет аккаунта? </Text>
          <Button
            onClick={() => setIsRegistered(false)}
            h="1rem"
            variant="link"
          >
            <Text color="blue.500">Зарегистрироваться</Text>
          </Button>
        </Box>
      ) : (
        <Text mt="5">Нужна помощь? Звоните +7 (915)521-75-11, мы поможем!</Text>
      )}
    </Container>
  );
};

export default AuthForm;
