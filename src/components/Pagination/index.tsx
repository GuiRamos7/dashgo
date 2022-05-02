import { Box, Button, Stack } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

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
        <PaginationItem number={1} />
        <PaginationItem number={2} />
        <PaginationItem isCurrent number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />

      </Stack>
    </Stack>
  );
};

export default Pagination;
