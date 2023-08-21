import { Box, Button, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { route: "/catalog", label: "Каталог" },
  { route: "/constructor", label: "Свой Дизайн" },
  { route: "/accessories", label: "Аксессуары" },
  { route: "/delivery-info", label: "Доставка" },
];

const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateToPage = (route: string) => {
    return () => navigate(route);
  };

  return (
    <Box display="flex" w="xl" justifyContent="space-between">
      {navigationItems.map((item) => (
        <Button key={item.label} onClick={navigateToPage(item.route)}>
          <Text fontSize="xl">{t(item.label)}</Text>
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;
