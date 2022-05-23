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
import { Header, Sidebar, Pagination } from 'components';
import Link from 'next/link';
import { useEffect } from 'react';
import { RiAddLine, RiPencilFill } from 'react-icons/ri';

const UserList = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box w='100%' flex='1' bg='gray.800' borderRadius={8} p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
            </Heading>

            <Link href='/users/create' passHref>
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
            </Link>
          </Flex>
          <Box w='100%' overflowX='auto'>
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
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
