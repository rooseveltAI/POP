import { chakra, Container, Grid } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import React from 'react'
import { Navbar } from './navbar'

type AppLayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 0px;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 4%);
          }

          ::-webkit-scrollbar-thumb {
            backgroundcolor: rgba(255, 255, 255, 12%);
          }
        `}
      />
      <Grid
        templateColumns="1fr"
        templateRows="0px 1fr"
        templateAreas={`"nav nav" "main main" "footer footer"`}
        minH="100vh"
        w="100%"
      >
        <chakra.nav gridArea="nav">
          <Navbar />
        </chakra.nav>
        <chakra.main gridArea="main">{children}</chakra.main>
      </Grid>
    </>
  )
}

export default Layout
