import React from 'react'
import { Box, Flex, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { IoIosMore } from 'react-icons/io'

type PinProps = {
  size: 'small' | 'medium' | 'large'
}

interface TabCardProps {
  title: string
  description?: string
  imageUrl?: string
  size: 'small' | 'medium' | 'large'
}

const Card: React.FC<TabCardProps> = ({ title, description, imageUrl, size }) => {
  const styles: { [key: string]: any } = {
    pin: {
      margin: '1px 10px',
      padding: 0,
      borderRadius: '4px',
      backgroundColor: '#FFFFFF'
    },
    small: {
      gridRowEnd: 'span 8'
    },
    medium: {
      gridRowEnd: 'span 12'
    },
    large: {
      gridRowEnd: 'span 12'
    }
  }

  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <Box {...styles.pin} {...styles[size]}>
      <Flex px={4} pt={4} pb={imageUrl ? 2 : 4} align="center" justify="space-between">
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

export default Card
