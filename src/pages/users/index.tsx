import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Header, Sidebar } from 'components';
import { RiAddLine, RiPencilFill } from 'react-icons/ri';

const UserList = () => {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' bg='gray.800' borderRadius={8} p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
            </Heading>
            <Button
              as='a'
              size='sm'
              fontSize='small'
              cursor='pointer'
              colorScheme='pink'
              alignItems='center'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Create new
            </Button>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>User</Th>
                <Th>Registration date</Th>
                <Th width='8' />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Guilherme Ramos</Text>
                    <Text fontSize='sm' color='gray.300'>
                      guioliveirarmos10@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>20 April, 2022</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='small'
                    cursor='pointer'
                    colorScheme='purple'
                    alignItems='center'
                    leftIcon={<Icon as={RiPencilFill} fontSize='16' />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
