import React from 'react'
import Image from 'next/image'

const BackGround = () => {
    return (
        <section class="text-white bg-transparent body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">


                <Image alt="..." src="/imagePr2.png" width='430' height='450' objectFit='contain' />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold">WELCOME TO MY WORLD</h1>
                    <p class="mb-8 leading-relaxed">A simple point less website filled with random things you can do. <br />check out all the rooms available to explore my world.</p>
                </div>
            </div>
            <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center
            min-h-min bg-[url('../public/pexels-aleksandar-pasaric-2603464-2.jpg')] rounded-3xl h-1/2 w-1/10 bg-no-repeat bg-cover bg-fixed">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">


                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">READ SOME BOOKS
                        <br class="hidden lg:inline-block" />Current recommendation:
                    </h1>
                    <p class="mb-8 leading-relaxed text-md text-white  ">
                        From a co-founder of Pixar Animation Studios—the Academy Award winning studio behind Coco, Inside Out, and Toy Story—comes an incisive book about creativity in business and leadership. NEW YORK TIMES BESTSELLER. It is, at heart, a book about creativity—but it is also, as Pixar co-founder and president Ed Catmull writes, “an expression of the ideas that I believe make the best in us possible.” As a young man, Ed Catmull had a dream: to make the first computer-animated movie. Nine years later, Toy Story was released, changing animation forever. The essential ingredient in that movie s success—and in the thirteen movies that followed—was the unique environment that Catmull and his colleagues built at Pixar. • If you dont strive to uncover what is unseen and understand its nature, you will be ill prepared to lead. • Its not the managers job to prevent risks. Its the managers job to make it safe for others to take them. • The cost of preventing errors is often far greater than the cost of fixing them. </p>
                    <div class="flex justify-end mx-10">
                        <a href="/Creativity, Inc. ( PDFDrive ).pdf" target="_blank" rel="noopener noreferrer"
                            class="py-1 px-5 text-white no-underline bg-blue-500 rounded hover:bg-blue-600 hover:text-blue-200 text-lg">Read</a>
                    </div>
                </div>
                <div class="my-5">
                    <Image objectFit='contain' width='3530' height='3450' alt="..." src="/Creativity, Inc. cover-1.png" />
                </div>




            </div>
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div>



                    <iframe width="934" height="525" src="https://www.youtube.com/embed/-5KAN9_CzSA" title="coffee shop radio // 24/7 lofi hip-hop beats" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">try listening to some
                        <br class="hidden lg:inline-block" />lofi music
                    </h1>
                    <p class="mb-8 leading-relaxed">Blank.</p>
                </div>
            </div>
        </section>
    )
}
export default BackGround