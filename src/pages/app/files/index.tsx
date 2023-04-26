import {
  Avatar,
  AvatarGroup,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  Stack,
  Tag,
  Image,
  Text,
  Box,
  Flex
} from '@chakra-ui/react'
import Layout from 'components/app.layout'
import Card from 'components/card'

const Page = () => {
  const tabs = [
    {
      title: 'similique aut voluptate',
      description: 'This is a description for Tab 1',
      imageUrl: 'https://via.placeholder.com/500x300'
    },
    {
      title: 'corbin.net',
      description: 'This is a description for Tab 2',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
    {
      title: 'Tab 3',
      imageUrl: 'https://via.placeholder.com/600x350'
    },
    {
      title: 'Tab 4',
      description: 'This is a description for Tab 4',
      imageUrl: 'https://via.placeholder.com/350x200'
    },

    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6, ',
      imageUrl: 'https://via.placeholder.com/350x200'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6',
      imageUrl: 'https://via.placeholder.com/350x200'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6'
    },
    {
      title: 'Tab 6',
      description: 'This is a description for Tab 6',
      imageUrl: 'https://via.placeholder.com/350x200'
    }
  ]

  return (
    <Container bgColor="#E9EBF1" minH="100vh" h="100%" maxW="100%" p="0">
      <Box
        w="100%"
        m="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gridGap="16px"
        justifyContent="center"
        px={{ base: '6', md: 12 }}
        py={{ base: '6rem', md: '10rem' }}
      >
        {tabs.map((tab, index) => (
          <Card
            key={index}
            title={tab.title}
            description={tab.description}
            imageUrl={tab.imageUrl}
            size={tab.imageUrl ? (tab.description ? 'large' : 'medium') : 'small'}
          />
        ))}
      </Box>
    </Container>
  )
}

Page.Layout = Layout
export default Page
