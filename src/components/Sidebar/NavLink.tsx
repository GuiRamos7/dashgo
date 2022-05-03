import { Text, Icon, Link as ChakraLink, LinkProps as ChakaraLinkProps } from "@chakra-ui/react"
import Link from 'next/link'
import { ElementType } from "react"

interface NavLinkProps extends ChakaraLinkProps {
  icon: ElementType,
  children: string,
  href: string
}

const NavLink = ({ children, icon, href, ...rest }: NavLinkProps) => {
  return <Link passHref href={href} >
    <ChakraLink display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='normal'>
        {children}
      </Text>
    </ChakraLink>

  </Link>
}

export default NavLink