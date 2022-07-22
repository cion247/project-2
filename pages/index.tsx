import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGround from '../components/BackGround'

const Home: NextPage = () => {
  return (
    // bg-[url('../public/field2.jpg')]  bg-no-repeat bg-cover bg-fixed bg-center
    <section>
      <div className=" h-full w-full bg-gradient-to-tl from-violet-900 via-emerald-900 to-cyan-900 fixed ">
        <Image src="/stars.png" layout="fill" objectFit="cover" objectPosition="center" priority />

      </div>
      {/*  */}

      <div className="absolute min-h-screen h-full w-full  bg-fixed "  >
        <Head>
          <title>My World</title>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
        <Header />
        <BackGround />
        <Footer />
      </div>


    </section>



  )
}

export default Home
