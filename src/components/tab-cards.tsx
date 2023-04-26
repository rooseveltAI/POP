import { Box, Flex, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { IoIosMore } from 'react-icons/io'

interface TabCardProps {
  title: string
  description?: string
  imageUrl?: string
}

const TabCard: React.FC<TabCardProps> = ({ title, description, imageUrl }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <Box bg={bg} borderRadius="md" overflow="hidden">
      <Flex px={4} pt={4} pb={imageUrl ? 2 : 4} justify="space-between">
        <Text fontWeight="semibold" fontSize="md" color={textColor}>
          {title}
        </Text>
        <Icon as={IoIosMore} />
      </Flex>
      {imageUrl && <Image src={imageUrl} alt={title} w="100%" h="130px" objectFit="cover" />}
      {description && (
        <Box px={4} pt={2} pb={imageUrl && description ? 4 : 2}>
          <Text fontSize="sm" color="gray.500" pt={2} noOfLines={2}>
            {description}
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default TabCard
