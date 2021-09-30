import {
  HStack,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  Avatar,
  Button,
  Icon,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

import MyDashboardLayout from "../../layouts/MyDashboardLayout";

import PageHeader from "../../components/PageHeader";
import { Pagination } from "../../components/Pagination";

export default function Users() {
  return (
    <>
      <PageHeader title="Usuários" />

      <Table>
        <Thead>
          <Tr>
            <Th px="6" color="gray.300" w="8">
              <Checkbox colorScheme="blue" />
            </Th>
            <Th w="350px">
              <Text fontSize="14" fontWeight="bold" casing="capitalize">
                Nome
              </Text>
            </Th>
            <Th>
              <Text fontSize="14" fontWeight="bold" casing="capitalize">
                Cadastro
              </Text>
            </Th>
            <Th w="8"></Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="blue" />
            </Td>
            <Td>
              <HStack>
                <Avatar name="Jonathan Doe" boxSize="8" />
                <Box>
                  <Text fontSize="14" fontWeight="bold">
                    Jonathan Doe
                  </Text>
                  <Text fontSize="12" color="gray.400">
                    jonathan.doe@example.com
                  </Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Text fontSize="14">26/09/2021</Text>
            </Td>
            <Td>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
              >
                Editar
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Pagination />
    </>
  );
}

Users.layout = MyDashboardLayout;
