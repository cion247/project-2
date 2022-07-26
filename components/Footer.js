import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-transparent body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row ">
                <a className="flex title-font font-medium items-center justify-start ">

                    <Image src="/earth.png" alt="..." width='50' height='40' objectFit='contain'
                        className="ml-3 rounded align-center" />
                </a>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2  sm:py-2 sm:mt-0 mt-4">twitter —
                    <a href="https://twitter.com/ArchCion" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@ArchCion</a>
                </p>

            </div>
        </footer>
    )
}
export default Footer
