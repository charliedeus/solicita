import NextLink from "next/link";
import {
  Box,
  VStack,
  Flex,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { RiAddFill, RiDashboardLine, RiTeamFill } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="20" h="100vh" bg="gray.900">
      <VStack w="100%" h="100%" spacing="6" margin="0 auto">
        <Flex direction="column" justify="space-between">
          <VStack mt={40} spacing="6">
            <IconButton
              aria-label="icon"
              icon={<RiAddFill fontSize="20" color="black" />}
              size="lg"
              variant="outline"
              bg="whiteAlpha.900"
              isRound
            />
            <NextLink href={"/dashboard"} passHref>
              <ChakraLink>
                <IconButton
                  aria-label="icon"
                  icon={<RiDashboardLine fontSize="20" color="black" />}
                  size="lg"
                  variant="outline"
                  bg="whiteAlpha.900"
                  isRound
                />
              </ChakraLink>
            </NextLink>
            <NextLink href={"/users"} passHref>
              <ChakraLink>
                <IconButton
                  aria-label="icon"
                  icon={<RiTeamFill fontSize="20" color="black" />}
                  size="lg"
                  variant="outline"
                  bg="whiteAlpha.900"
                  isRound
                />
              </ChakraLink>
            </NextLink>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
}
