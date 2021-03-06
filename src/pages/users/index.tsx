import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link,
} from '@chakra-ui/react';
import { Header, Sidebar, Pagination } from 'components';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { RiAddLine, RiPencilFill } from 'react-icons/ri';
import { api } from 'services/api';
import { useUsers } from 'services/hooks/useUsers';
import { queryClient } from 'services/queryClient';

const UserList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUsers(page);

  const handlePrefetchUser = (userId: string) => {
    queryClient.prefetchQuery(
      ['users', userId],
      async () => {
        const response = await api.get(`user/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 15, // 15 minutes
      }
    );
  };

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box w='100%' flex='1' bg='gray.800' borderRadius={8} p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Users
              {!isLoading && isFetching && (
                <Spinner size='sm' color='gray.500' ml='4' />
              )}
            </Heading>

            <NextLink href='/users/create' passHref>
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
            </NextLink>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Error to load users data</Text>
            </Flex>
          ) : (
            <>
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
                    {data.users.map((user) => (
                      <Tr key={user.id}>
                        <Td px='6'>
                          <Checkbox colorScheme='pink' />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color='purple.500'
                              href='/'
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight='bold'>{user.name}</Text>
                            </Link>
                            <Text fontSize='sm' color='gray.300'>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td>{user.createdAt}</Td>
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
                    ))}
                  </Tbody>
                </Table>
              </Box>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
