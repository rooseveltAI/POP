import { Box, Grid, Heading, Image, Stack, Text, chakra } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Grid
      templateColumns="148px 1fr 146px"
      templateRows="1fr"
      minH="100vh"
      w="100%"
      overflow="hidden"
      pos="fixed"
      bgColor="#0D0D0D"
    >
      <chakra.aside py="50px" borderRight="1px solid rgba(255, 255, 255, 0.08)">
        <Stack align="center" w="100%">
          <Image src="/logo-mark.svg" alt="logo" />
        </Stack>
      </chakra.aside>

      <chakra.main px="50" py="40px">
        <chakra.header>
          <Stack align="center" justify="space-between" direction={{ base: 'column', md: 'row' }}>
            <Heading fontSize={{ base: '24px', md: '48px' }} fontWeight="300" as="h1" color="#FFFFFF">
              POPTAB
            </Heading>
            <Text fontSize="italics" fontWeight="400" color="#FFFFFF" opacity="0.5">
              — Capture ideas, and watch them grow into something amazing.
            </Text>
          </Stack>
        </chakra.header>
        <Stack
          w="full"
          h={{ base: '100%', md: '100%' }}
          display={{ base: 'none', md: 'block' }}
          py="50px"
          // bgColor="rgba(255, 255, 255, 8%)"
        >
          <Image
            src="/showcase.png"
            alt="TeamOps"
            // layout="responsive"
            layout="fixed"
            loading="lazy"
            width={1080}
            height={720}
          />
        </Stack>

        <Stack
          w="full"
          h={{ base: '100%', md: '100%' }}
          display={{ base: 'block', md: 'none' }}
          // bgColor="rgba(255, 255, 255, 8%)"
        >
          <Image
            src="/images/tops.png"
            alt="TeamOps"
            layout="responsive"
            // layout="fixed"
            loading="lazy"
            width={1080}
            height={720}
          />
        </Stack>
      </chakra.main>

      <chakra.aside>
        <Stack h="100%" direction="row" align="center" py="2rem" spacing="4rem" transform="rotate(90deg)">
          <Box w="50px" h="50px" border="0.5px solid #FFFFFF" transform="rotate(90deg)" />
          <Text letterSpacing="0.02em" textTransform="uppercase" color="#FFFFFF">
            About
          </Text>
          <Box w="50px" h="50px" border="0.5px solid #FFFFFF" transform="rotate(90deg)" />
          <Text letterSpacing="0.02em" textTransform="uppercase" color="#FFFFFF">
            Twitter
          </Text>
        </Stack>
      </chakra.aside>
    </Grid>
  )
}

export default Home
