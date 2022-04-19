import { Box, Button, Stack } from '@chakra-ui/react';

const Pagination = () => {
  return (
    <Stack
      direction='row'
      mt='7'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0 - 10</strong> of <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='8'>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='pink'
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'pointer',
          }}
        >
          1
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bg: 'gray.500',
          }}
        >
          2
        </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bg: 'gray.500',
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
};

export default Pagination;
