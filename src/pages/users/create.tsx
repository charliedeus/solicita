import {
  Box,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";

import MyDashboardLayout from "../../layouts/MyDashboardLayout";

import PageHeader from "../../components/PageHeader";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
  return (
    <>
      <PageHeader title="Novo Usuário" />

      <Box flex="1" borderRadius={2} bg="whiteAlpha.900" m={6} p="4">
        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <Input
              name="name"
              // label="Nome"
              // id={`name-input-${new Date().getTime()}`}
            />
            <Input
              name="email"
              type="email"
              // label="E-mail"
              // id={`email-input-${new Date().getTime()}`}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <Input
              name="password"
              type="password"
              // label="Senha"
              // id={`senha-input-${new Date().getTime()}`}
            />
            <Input
              name="password_confirmation"
              type="password"
              // label="Confirmação de Senha"
              // id={`name-input-${new Date().getTime()}`}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button colorScheme="gray">Cancelar</Button>
            <Button colorScheme="red">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

CreateUser.layout = MyDashboardLayout;
