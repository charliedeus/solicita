import { Flex, Input, Icon, HStack, Box, Text, Avatar } from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiMailLine } from 'react-icons/ri';

export function Header() {
  return (
    <>
      <Flex
        as="header"
        w="100%"
        align="center"
        h="20"
        mx="auto"
        px="6"
      >
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
            _placeholder={{ color: 'gray.400' }}
          />
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>

        <Flex align="center" ml="auto">
          <HStack
            spacing="8"
            mx="8"
            pr="8"
            py="1"
            color="gray.700"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Icon as={RiMailLine} fontSize="20" />
            <Icon as={RiNotificationLine} fontSize="20" />
          </HStack>

          <Flex align="center">
            <Box mr="4" textAlign="right">
              <Text>Jonathan Doe</Text>
              <Text color="gray.700" fontSize="small">
                jonathan.doe@example.com
              </Text>
            </Box>

            <Avatar size="md" name="Jonathan Doe" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
