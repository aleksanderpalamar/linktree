import { Box, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      as="footer"
      mt="20"      
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="4rem"
      borderTop="2px solid #202024"
    >
      <Text
        as="small"
        fontSize="sm"
        color="gray.300"
        display="flex"
        alignItems="center"
        gap="2"
      >
        Feito com{" "}
        <Box as="span" role="img" aria-label="heart">
          ❤️
        </Box>
        <Text
          as="a"
          href="https://www.palamarsolutionit.com.br/"
          target="_blank"
          fontWeight="black"
          borderBottom="2px solid #a8a8b3"
          color="gray.300"
          textDecoration="none"
        >
          por Palamar
        </Text>
      </Text>
    </Box>
  );
}
