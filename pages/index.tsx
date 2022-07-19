import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGround from '../components/BackGround'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[url('../public/field2.jpg')] h-full w-full bg-no-repeat bg-cover bg-fixed bg-center"  >
      <Head>
        <title>My World</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />
      <BackGround />
      <Footer />
    </div>

  )
}

export default Home
