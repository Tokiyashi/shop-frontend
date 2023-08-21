import { useTranslation } from "react-i18next";
import AuthForm from "./AuthForm";
import Container from "./styles/Container";
import LoginImage from "./styles/LoginImage";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LoginImage />
      <AuthForm />
    </Container>
  );
};

export default LoginPage;
