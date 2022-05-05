import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  type?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        bgColor='gray.900'
        focusBorderColor='pink.500'
        variant='filled'
        size='lg'
        _hover={{
          bgColor: 'gray.900',
        }}
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

const Input = forwardRef(InputBase)

export default Input;
