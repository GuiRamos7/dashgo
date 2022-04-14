import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from 'components';

const Home = () => {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxW='360px'
        bg='gray.800'
        p='8'
        borderRadius='8'
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input name='email' label='E-mail' type='email' isRequired />
          <Input name='password' label='Password' type='password' isRequired />
        </Stack>
        <Button type='submit' mt='4' colorScheme='pink'>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
