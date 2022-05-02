import { Box, Text, Icon, Link, LinkProps as ChakaraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"
import { RiInputMethodLine, RiGitMergeLine } from "react-icons/ri"

interface NavLinkProps extends ChakaraLinkProps {
  icon: ElementType,
  children: string
}

const NavLink = ({ children, icon, ...rest }: NavLinkProps) => {
  return <Link display='flex' alignItems='center' {...rest}>
    <Icon as={icon} fontSize='20' />
    <Text ml='4' fontWeight='normal'>
      {children}
    </Text>
  </Link>
}

export default NavLink