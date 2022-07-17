import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header class="text-gray-400 bg-transparent body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Image src="/pages/earth.png"
                    alt='log0'
                    width={220}
                    height={220} />
                <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                    <span class="ml-3 text-xl">MY WORLD</span>

                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-white">First Link</a>
                    <a class="mr-5 hover:text-white">Second Link</a>
                    <a class="mr-5 hover:text-white">Third Link</a>
                    <a class="mr-5 hover:text-white">Fourth Link</a>
                </nav>

            </div>
        </header >
    )
}

export default Header