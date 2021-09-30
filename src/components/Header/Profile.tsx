import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiMailLine, RiNotificationLine } from "react-icons/ri";

export function Profile() {
  return (
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

      <Profile />
    </Flex>
  );
}
