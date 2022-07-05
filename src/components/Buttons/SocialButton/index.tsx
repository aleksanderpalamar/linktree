import { Box } from "@chakra-ui/react";
import { ElementType } from "react";

interface SocialButtonProps {
  url: string;
  title: string;
  icon: ElementType;
  alt: string;
}

export function SocialButton({ url, title, icon, alt }: SocialButtonProps) {
  return (
    <Box
      as="a"      
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      cursor="pointer"
      bg="transparent"
      color="gray.100"
      border="1px solid #FFCF00"
      rounded={4}
      h="4rem"      
      padding="0 1.5rem"
      fontWeight="bold"
      textDecoration="none"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="0.5rem"
      fontSize="0.875rem"
      marginBottom="1.5rem"
      _hover={{
        bg: "yellow.500",
        color: "gray.900",
        transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
      }}
      _focus={{
        outline: "transparent",
        boxShadow: "0 0 0 2px #FFCF00",
      }}
    >
      <Box as={icon} size="1.5rem" />
      {title}
    </Box>
  );
}
