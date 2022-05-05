import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
  email: string;
  password: string;
}

const Home = () => {

  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input label='E-mail' type='email' isRequired {...register('email')} />
          <Input label='Password' type='password' isRequired {...register('password')} />
        </Stack>
        <Button isLoading={formState.isSubmitting} type='submit' mt='4' colorScheme='pink'>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
