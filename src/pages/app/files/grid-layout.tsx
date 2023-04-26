import { Box } from '@chakra-ui/react'
import Card from 'components/card'
import React from 'react'
// import Card from

function PinterestLayout() {
  return (
    <Box
      w="80vw"
      m="0 auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gridGap="20px"
      justifyContent="center"
      bgColor="black"
      p={4}
      borderRadius="md"
    >
      <Card size="small" />
      <Card size="medium" />
      <Card size="small" />
      <Card size="medium" />
      <Card size="small" />
      <Card size="medium" />
      <Card size="large" />
      <Card size="large" />
      <Card size="large" />
    </Box>
  )
}

export default PinterestLayout
