import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

import { Profile } from "../components/Header/Profile";

export function Header() {
  return (
    <>
      <Flex as="header" w="100%" align="center" h="20" mx="auto" px="6">
        <Flex
          as="label"
          flex="1"
          py="3"
          px="8"
          maxW={400}
          alignSelf="center"
          color="gray.900"
          position="relative"
          bg="gray.100"
          borderRadius="full"
        >
          <Input
            color="gray.900"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar na plataforma"
            _placeholder={{ color: "gray.400" }}
          />
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>

        <Profile />
      </Flex>
    </>
  );
}
