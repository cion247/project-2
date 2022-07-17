import React from 'react'


const BackGround = () => {
    return (
        <section class="text-gray-400 bg-transparent body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">READ SOME BOOKS
                        <br class="hidden lg:inline-block" />Current recommendation:
                    </h1>
                    <p class="mb-8 leading-relaxed text-white">
                        From a co-founder of Pixar Animation Studios—the Academy Award winning studio behind Coco, Inside Out, and Toy Story—comes an incisive book about creativity in business and leadership. NEW YORK TIMES BESTSELLER. It is, at heart, a book about creativity—but it is also, as Pixar co-founder and president Ed Catmull writes, “an expression of the ideas that I believe make the best in us possible.” As a young man, Ed Catmull had a dream: to make the first computer-animated movie. Nine years later, Toy Story was released, changing animation forever. The essential ingredient in that movie s success—and in the thirteen movies that followed—was the unique environment that Catmull and his colleagues built at Pixar. • If you dont strive to uncover what is unseen and understand its nature, you will be ill prepared to lead. • Its not the managers job to prevent risks. Its the managers job to make it safe for others to take them. • The cost of preventing errors is often far greater than the cost of fixing them. </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="../public/Creativity, Inc. cover-1.png" />
                </div>
            </div>
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">try listening to some
                        <br class="hidden lg:inline-block" />lofi music
                    </h1>
                    <p class="mb-8 leading-relaxed">Blank.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Play</button>
                    </div>
                </div>
            </div>
        </section>


    )
}
export default BackGround