import { Box, Link, Stack, Text, Icon } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

const Sidebar = () => {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            GENERAL
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' alignItems='center'>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='normal'>
                Dashboard
              </Text>
            </Link>
            <Link display='flex' alignItems='center'>
              <Icon as={RiContactsLine} fontSize='20' />
              <Text ml='4' fontWeight='normal'>
                Users
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
            Automation
          </Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' alignItems='center'>
              <Icon as={RiInputMethodLine} fontSize='20' />
              <Text ml='4' fontWeight='normal'>
                Forms
              </Text>
            </Link>
            <Link display='flex' alignItems='center'>
              <Icon as={RiGitMergeLine} fontSize='20' />
              <Text ml='4' fontWeight='normal'>
                Automation
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;