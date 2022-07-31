import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="text-white body-font text-shadow-xl ">
            <div className="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <Link href="/"><a className="flex title-font font-medium items-center  mb-4 md:mb-0 " href="/">

                    <Image src="/earth.png" alt="..." width='50' height='40' objectFit='contain' className="ml-3 rounded align-center" />


                    <span className="ml-3 text-3xl">LEARN CANVAS</span>
                </a></Link>

                <nav className="md:ml-auto  flex flex-wrap items-center justify-center  text-lg ">

                    <Link href="/room1"><a target="_blank" rel="noopener noreferrer" className=" mx-3 px-6 my-1 py-5 bg-green-500 rounded 
                        hover:bg-green-700 ">Room 1
                    </a></Link>

                    <Link href="/room2"><a target="_blank" rel="noopener noreferrer" className=" mx-3 px-6 my-1 py-5 bg-green-500 rounded 
                        hover:bg-green-700 ">Room 2
                    </a></Link>

                    {/* <Link href="/room3"><a target="_blank" rel="noopener noreferrer" className=" mx-3 px-3 my-1 pb-1 rounded bg-green-900  hover:bg-green-700">Room 3
                    </a></Link>

                    <Link href="/room4"><a target="_blank" rel="noopener noreferrer" className=" mx-3 px-3 my-1 pb-1 rounded bg-green-900  hover:bg-green-700">src used
                    </a></Link> */}

                </nav>
            </div>

        </header >
    )
}
export default Header