import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header class="  bg-transparent text-gray-400 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 " href="/index.tsx">

                    <Image src="/earth.png" alt="..." width='50' height='40' objectFit='contain'
                        class="ml-3 rounded align-center" />


                    <span class="ml-3 text-xl">MY WORLD</span>

                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

                    <a href="/about.tsx" target="_blank" rel="noopener noreferrer"
                        class=" mx-3 px-3 text-whie no-underline bg-green-900 rounded hover:text-white
                        hover:bg-transparent  text-lg">Room 1
                    </a>
                    <a href="/about.tsx" target="_blank" rel="noopener noreferrer"
                        class=" mx-3 px-3 text-whie no-underline bg-green-900 rounded hover:text-white
                        hover:bg-transparent  text-lg">Room 2
                    </a>

                    <a href="/about.tsx" target="_blank" rel="noopener noreferrer"
                        class=" mx-3 px-3  no-underline bg-rgb(22, 34, 30) rounded hover:bg-green-900 hover:text-white text-lg">Room 3
                    </a>
                    <a href="/about.tsx" target="_blank" rel="noopener noreferrer"
                        class=" mx-3 px-3  no-underline bg-rgb(22, 34, 30) rounded hover:bg-green-900 hover:text-white text-lg">Room 4
                    </a>









                </nav>

            </div>
        </header >
    )
}

export default Header