import { Flex, Button, Stack, Image } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex w="100%" maxW={860} align="center" justify="center">
        <Flex as="form" w="100%" maxW={450} p="8" flexDir="column">
          <Image
            src="/black-logo.png"
            alt="Agência Estadual de Serviços Públicos"
            w="200px"
            margin="0 auto"
          />
          <Stack spacing="4">
            <Input
              name="email"
              type="email"
              // label="E-mail"
            />
            <Input
              name="password"
              type="password"
              // label="Senha"
            />
          </Stack>
          <Button type="submit" mt="14" bg="gray.900" color="gray.50" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        h="100%"
        bg="gray.900"
        backgroundImage="/bg-login-bus.jpg"
        bgSize="cover"
        bgPosition="center"
      ></Flex>
    </Flex>
  );
}
