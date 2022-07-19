import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Room3: NextPage = () => {
  return (
    <div className="min-h-screen bg-[url('../public/pexels-harrison-candlin-2441454.jpg')] h-full w-full bg-no-repeat bg-cover bg-fixed bg-center"  >
      <Head>
        <title>Room 3</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />

      <Footer />
    </div>

  )
}

export default Room3
