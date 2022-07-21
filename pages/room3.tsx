import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const Room3: NextPage = () => {
  return (
    <section>
      <div className=" h-full w-full  fixed ">
        <Image src="/pexels-harrison-candlin-2441454-2.jpg" layout="fill"
          objectFit="cover" objectPosition="top" blurDataURL="data:..." priority
          placeholder="blur" quality={40} >

        </Image>
      </div>
      <div className="absolute min-h-screen h-full w-full"  >
        <Head>
          <title>Room 3</title>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
        <Header />

        <Footer />
      </div>
    </section>


  )
}

export default Room3


