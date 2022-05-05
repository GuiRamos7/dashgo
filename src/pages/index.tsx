import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required()
})


const Home = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  { console.log(errors) }


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
          <Input name="email" label='E-mail' type='email' error={errors?.email} {...register('email')} />
          <Input name="password" label='Password' type='password' error={errors?.password} {...register('password')} />
        </Stack>
        <Button isLoading={isSubmitting} type='submit' mt='4' colorScheme='pink'>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
