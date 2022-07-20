import React, { useState } from 'react'
import Image from 'next/image'


const BackGround = () => {
    const [count, setCount] = useState('visible');
    function toggle() {
        if (count == 'visible') setCount('invisible');
        else setCount('visible');


    }
    return (
        <section class="text-white text-shadow-xl bg-transparent body-font justify-center">
            <div class="container mx-auto pt-36 flex px-5 pb-12 items-center justify-center ">
                {/*<div class="flex flex-wrap  md:-m-2 m-1 justify-center">
                    <div class=" p-1 w-1/2 md:w-3/4 2xl:w-full justify-center">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="/imagePr2.png" />

                    </div>
                </div>*/}

                <div class="text-center  w-1/2 md:w-3/4 xl:w-full">
                    <h1 class="title-font text-2xl md:text-4xl 2xl:text-5xl mb-4 font-bold ">WELCOME TO MY WORLD</h1>
                    <p class="mb-8 leading-relaxed ">A simple point less website filled with random things you can do. <br />check out all the rooms available to explore my world.</p>
                </div>
            </div>

            <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center
            min-h-min bg-[url('../public/pexels-aleksandar-pasaric-2603464-2.jpg')] rounded-3xl h-1/2 w-full bg-no-repeat bg-cover bg-fixed lg:flex-grow">
                <div class=" flex flex-col md:pr-16  md:w-3/4 items-start md:text-left mb-16 md:mb-0 lg:pr-24 lg:flex-grow   text-start xl:w-full">


                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">READ SOME BOOKS
                        <br class="hidden lg:inline-block" />Current recommendation:
                    </h1>
                    <p class="mb-8 leading-relaxed text-md  ">
                        From a co-founder of Pixar Animation Studios—comes an incisive book about creativity in business and leadership. NEW YORK TIMES BESTSELLER. It is, at heart, a book about creativity—but it is also, as Pixar co-founder and president Ed Catmull writes, “an expression of the ideas that I believe make the best in us possible.” <span class={count}>As a young man, Ed Catmull had a dream: to make the first computer-animated movie. Nine years later, Toy Story was released, changing animation forever. The essential ingredient in that movie s success—and in the thirteen movies that followed—was the unique environment that Catmull and his colleagues built at Pixar. • If you dont strive to uncover what is unseen and understand its nature, you will be ill prepared to lead. • Its not the managers job to prevent risks. Its the managers job to make it safe for others to take them. • The cost of preventing errors is often far greater than the cost of fixing them.</span> <button onClick={toggle} class="mx-1 px-2 py-2 text-gray-400">read less...</button></p>

                    <div class="flex  mx-10">
                        <a href="/Creativity, Inc. ( PDFDrive ).pdf" target="_blank" rel="noopener noreferrer"
                            class="py-1 px-5 text-white no-underline bg-blue-500 rounded hover:bg-blue-600 hover:text-blue-200 text-lg">Read</a>
                    </div>
                </div>
                <div class=" p-1 w-2/4 2xl:w-1/2 ">
                    <img alt="gallery" class=" object-contain object-center block" src="/Creativity, Inc. cover-1.png" />
                </div>

            </div>
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <iframe className=" w-full aspect-video" src="https://www.youtube.com/embed/-5KAN9_CzSA" title="coffee shop radio // 24/7 lofi hip-hop beats" alt="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">try listening to some
                        <br class="hidden lg:inline-block" />lofi music
                    </h1>
                    <p class="mb-8 leading-relaxed">Blank.</p>
                </div>
            </div>
        </section>
    )
}
export default BackGround