import React from "react";
import { Box, Divider } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Box
        as="header"
        bg="blue.500"
        color="white"
        textAlign="center"
        py={4}
        fontWeight="bold"
        fontSize="2xl"
      >
        Todo
      </Box>
      <Divider />
      <Box marginBottom="12px" />
    </>
  );
}

export default Header;
