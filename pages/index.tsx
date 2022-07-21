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
      <div className=" h-full w-full  fixed ">
        <Image src="/field.jpg" layout="fill"
          objectFit="cover" objectPosition="top" width={4053} height={2867} >

        </Image>
      </div>
      <div className="absolute min-h-screen h-full w-full"  >
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
