import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const Room4: NextPage = () => {
  return (
    <section>
      <div className=" h-full w-full  fixed ">
        <Image src="/pexels-björn-austmar-þórsson-7267852-2.jpg" layout="fill"
          objectFit="cover" objectPosition="top" />

      </div>
      <div className="absolute min-h-screen h-full w-full"  >
        <Head>
          <title>Room 4</title>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
        <Header />

        <Footer />
      </div>
    </section>


  )
}

export default Room4



