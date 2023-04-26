import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from 'theme'
import { motion, AnimatePresence } from 'framer-motion'

const LayoutDefault = ({ children }: any) => <>{children}</>

function App({ Component, pageProps, router }: any) {
  const Layout = Component.Layout || LayoutDefault
  const layoutProps = pageProps.layoutProps || {}

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>POPTAB</title>
        <meta name="description" content="ai launcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Layout {...layoutProps}>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default App
