import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header class="  bg-transparent text-white body-font text-shadow-xl ">
            <div class="container mx-auto flex flex-wrap p-5 flex-column md:flex-row items-center fixed ">

                <Link href="/"><a class="flex title-font font-medium items-center  mb-4 md:mb-0 " href="/">

                    <Image src="/earth.png" alt="..." width='50' height='40' objectFit='contain' class="ml-3 rounded align-center" />


                    <span class="ml-3 text-xl">MY WORLD</span>
                </a></Link>

                <nav class="md:ml-auto  flex flex-wrap items-center justify-center  text-lg ">

                    <Link href="/room1"><a target="_blank" rel="noopener noreferrer" class=" mx-3 px-3 pb-1 bg-green-900 rounded 
                        hover:bg-green-700 ">Room 1
                    </a></Link>

                    <Link href="/room2"><a target="_blank" rel="noopener noreferrer" class=" mx-3 px-3 pb-1 bg-green-900 rounded 
                        hover:bg-green-700 ">Room 2
                    </a></Link>

                    <Link href="/room3"><a target="_blank" rel="noopener noreferrer" class=" mx-3 px-3 pb-1 rounded bg-green-900  hover:bg-green-700">Room 3
                    </a></Link>

                    <Link href="/room4"><a target="_blank" rel="noopener noreferrer" class=" mx-3 px-3 pb-1 rounded bg-green-900  hover:bg-green-700">Room 4
                    </a></Link>

                </nav>
            </div>

        </header >
    )
}
export default Header