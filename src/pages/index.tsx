import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

export default function Home() {
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
          <FormControl>
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Input
              name='email'
              id='email'
              bgColor='gray.900'
              focusBorderColor='pink.500'
              variant='filled'
              size='lg'
              _hover={{
                bgColor: 'gray.900',
              }}
              type='email'
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              name='password'
              id='password'
              bgColor='gray.900'
              focusBorderColor='pink.500'
              variant='filled'
              size='lg'
              _hover={{
                bgColor: 'gray.900',
              }}
              type='password'
              isRequired
            />
          </FormControl>
        </Stack>
        <Button type='submit' mt='4' colorScheme='pink'>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}
