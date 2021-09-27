import { Flex, Text } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title = "Título" }: PageHeaderProps) {
  return (
    <Flex
      w="100%"
      h="100px"
      direction="column"
      align="flex-start"
      justify="center"
      bg="whiteAlpha.900"
      px={6}
      py={8}
    >
      <Text fontSize="2xl" color="gray.500">
        {title}
      </Text>
    </Flex>
  );
}
