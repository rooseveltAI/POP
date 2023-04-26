import { Flex, Stack, Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Avatar } from '@chakra-ui/react'
import { FiGrid, FiSearch, FiPlus } from 'react-icons/fi'

export const Navbar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      height={{ base: 'auto', md: '150px' }}
      align="center"
      justify="space-between"
      px={{ base: '4', md: '3rem' }}
      zIndex="sticky"
    >
      {/* Grid icon menu */}
      <IconButton aria-label="Grid Icon Menu" icon={<FiGrid />} variant="ghost" size="lg" />

      {/* Centered stack container */}
      <Stack direction="row" align="center" justify="center" spacing="28px" flex="1">
        <InputGroup size="lg" rounded="full" w="400px">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.500" />
          </InputLeftElement>
          <Input variant="solid" placeholder="Search Tabs" rounded="full" px="4" />
        </InputGroup>
        <IconButton
          aria-label="Add Tab"
          icon={<FiPlus color="#FFFFFF" size="22" />}
          bg="blue.50"
          rounded="full"
          size="md"
          _hover={{ bg: 'blue.50' }}
          _active={{ bg: 'blue.50' }}
        />
      </Stack>

      {/* Avatar */}
      <Avatar size="md" name="John Doe" src="https://bit.ly/dan-abramov" />
    </Flex>
  )
}
