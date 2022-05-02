import { Text } from "@chakra-ui/react"

const Logo = () => {
  return <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
    dashgo
    <Text as='span' fontSize='5xl' color='pink.500'>
      .
    </Text>
  </Text>
}

export default Logo