import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Header, Sidebar, Input } from 'components';

import Link from 'next/link';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { useRouter } from 'next/router';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormDataSchema = yup.object().shape({
  name: yup.string().required('Name required'),
  email: yup.string().required('E-mail required').email('E-mail is not valid'),
  password: yup.string().required('Password required').min(8, 'Min 8 Char'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords should match'),
});

const CreateUser = () => {
  const router = useRouter();

  const { isLoading, mutateAsync } = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserFormDataSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await mutateAsync(data);

    router.push('/users');
  };

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box
          as='form'
          onSubmit={handleSubmit(handleCreateUser)}
          flex='1'
          bg='gray.800'
          borderRadius={8}
          p={['6', '8']}
        >
          <Heading size='lg' fontWeight='normal'>
            Create User
          </Heading>
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='name'
                label='Full name'
                error={errors?.name}
                {...register('name')}
              />
              <Input
                name='email'
                type='email'
                label='E-mail'
                error={errors?.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='password'
                type='password'
                label='Password'
                error={errors?.password}
                {...register('password')}
              />
              <Input
                name='password_confirmation'
                type='password'
                label='Password confirmation'
                error={errors?.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha'>Cancel</Button>
              </Link>
              <Button type='submit' colorScheme='pink' isLoading={isLoading}>
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
