import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Room4: NextPage = () => {
  return (
    <div className="min-h-screen bg-[url('../public/pexels-björn-austmar-þórsson-7267852.jpg')] h-full w-full bg-no-repeat bg-cover bg-fixed bg-center"  >
      <Head>
        <title>Room 4</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />

      <Footer />
    </div>

  )
}

export default Room4
