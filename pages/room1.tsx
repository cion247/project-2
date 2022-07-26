import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BgOne from '../components/BgOne'
import Image from 'next/image'

const Room1: NextPage = () => {
  return (
    <section>
      <div className="h-full w-full bg-gradient-to-tl from-violet-900 via-emerald-900 to-cyan-900 fixed ">
        <Image src="/pexels-satoshi-hirayama-2.jpg" layout="fill"
          objectFit="cover" objectPosition="top" blurDataURL="data:..." priority
        />


      </div>
      <div className="   absolute min-h-screen h-full w-full ">
        <Head>
          <title>Room 1</title>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
        <Header />
        <BgOne />

        <Footer />
      </div>
    </section>


  )
}

export default Room1

