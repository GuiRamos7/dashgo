import { Text, Icon, Link as ChakraLink, LinkProps as ChakaraLinkProps } from "@chakra-ui/react"
import ActiveLink from "components/ActiveLink"
import { ElementType } from "react"

interface NavLinkProps extends ChakaraLinkProps {
  icon: ElementType,
  children: string,
  href: string
}

const NavLink = ({ children, icon, href, ...rest }: NavLinkProps) => {
  return <ActiveLink passHref href={href} >
    <ChakraLink display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='normal'>
        {children}
      </Text>
    </ChakraLink>

  </ActiveLink>
}

export default NavLink