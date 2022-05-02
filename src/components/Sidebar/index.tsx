import { Box, Link, Stack, Text, Icon } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import NavLink from './NavLink';
import NavSection from './NavSection';

const Sidebar = () => {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <NavSection title='GENERAL'>
          <Box>
            <NavLink icon={RiDashboardLine} >
              Dashboard
            </NavLink>
            <NavLink icon={RiContactsLine} >
              Users
            </NavLink>
          </Box>
        </NavSection>
        <NavSection title='AUTOMATION'>
          <Box>
            <NavLink icon={RiInputMethodLine} >
              Forms
            </NavLink>
            <NavLink icon={RiGitMergeLine} >
              Automation
            </NavLink>
          </Box>
        </NavSection>
      </Stack>
    </Box>
  );
};

export default Sidebar;
