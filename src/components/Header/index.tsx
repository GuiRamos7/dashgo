import { Flex } from '@chakra-ui/react';

import SearchBox from './SearchBox';
import NotificationNav from './NotificationNav';
import Profile from './Profile';
import Logo from './Logo';

const Header = () => {
  return (
    <Flex
      maxWidth={1480}
      as='header'
      w='100%'
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Logo />
      <SearchBox />
      <Flex align='center' ml='auto'>
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
