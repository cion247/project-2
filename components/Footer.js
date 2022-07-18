import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer class="text-gray-400 bg-transparent body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">

                    <Image src="/earth.png" alt="..." width='50' height='40' objectFit='contain'
                        class="ml-3 rounded align-center" />
                </a>
                <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">twitter —
                    <a href="https://twitter.com/ArchCion" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@ArchCion</a>
                </p>

            </div>
        </footer>
    )
}
export default Footer
