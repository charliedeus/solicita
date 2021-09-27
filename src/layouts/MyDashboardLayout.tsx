import { Flex, SimpleGrid } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function MyDashboardLayout({ children }) {
  return (
    <Flex h="100vh">
      <Sidebar />

      <Flex direction="column" w="100%">
        <Header />
        <SimpleGrid>{children}</SimpleGrid>
      </Flex>
    </Flex>
  );
}
