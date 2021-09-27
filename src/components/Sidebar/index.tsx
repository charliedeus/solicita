import { Box, VStack, Flex, IconButton, Icon } from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="20" h="100vh" bg="gray.900">
      <VStack w="100%" h="100%" spacing="6" margin="0 auto">
        <Flex direction="column" justify="space-between">
          <VStack mt={40} spacing="6">
            <IconButton
              aria-label="icon"
              icon={<RiAddFill fontSize="30" color="black" />}
              size="lg"
              variant="outline"
              bg="whiteAlpha.900"
              isRound
            />
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
}
