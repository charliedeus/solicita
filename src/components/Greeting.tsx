import { Flex, Text } from "@chakra-ui/react";

export function Greeting() {
  return (
    <>
      <Flex
        w="100%"
        h="200px"
        direction="column"
        align="flex-start"
        justify="center"
        bg="whiteAlpha.900"
        px={6}
        py={8}
      >
        <Text fontSize="18">
          Olá, <strong>Jonathan Doe</strong>, bom dia!
        </Text>
        <Text fontSize="18" color="gray.700">
          No momento, não há solicitações atribuídas a você.
        </Text>
      </Flex>
    </>
  );
}
