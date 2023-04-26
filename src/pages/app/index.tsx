import { GetServerSideProps } from 'next'

const Page = () => null

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
    redirect: {
      permanent: true,
      destination: '/app/files'
    }
  }
}
export default Page
