import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        width='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'pointer',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      onClick={() => onPageChange(number)}
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
