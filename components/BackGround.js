import React, { useState } from 'react'
import Image from 'next/image'


const BackGround = () => {
    const [count, setCount] = useState('hidden');
    const [text, setText] = useState('show more..')
    function toggle() {
        if (count == 'hidden') {
            setCount(' '); setText('show less..');
        }
        else {
            setCount('hidden'); setText('show more..');
        }
    }
    return (
        <section className="text-white text-shadow-xl body-font justify-center ">
            <div className="container mx-auto pt-40 flex px-5 pb-12  justify-center ">
                <div className="text-center  w-1/2 md:w-3/4 xl:w-full">
                    <h1 className="title-font text-2xl md:text-4xl 2xl:text-5xl mb-4 font-bold ">WELCOME TO MY WORLD</h1>
                    <p className="mb-8 leading-relaxed ">A simple point less website filled with random things you can do. <br />check out all the rooms available to explore my world.</p>
                </div>
            </div>

            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center
            min-h-min bg-[url('../public/pexels-aleksandar-pasaric-2603464.jpg')] rounded-3xl h-1/2 w-full bg-no-repeat bg-cover bg-fixed lg:flex-grow">
                <div className=" flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">


                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">READ SOME BOOKS
                        <br /> Current recommendation:
                    </h1>
                    <p className="mb-8 leading-relaxed text-md  ">
                        From a co-founder of Pixar Animation Studios—comes an incisive book about creativity in business and leadership. NEW YORK TIMES BESTSELLER. It is, at heart, a book about creativity—but it is also, as Pixar co-founder and president Ed Catmull writes, “an expression of the ideas that I believe make the best in us possible.” <span className={count}>As a young man, Ed Catmull had a dream: to make the first computer-animated movie. Nine years later, Toy Story was released, changing animation forever. The essential ingredient in that movie s success—and in the thirteen movies that followed—was the unique environment that Catmull and his colleagues built at Pixar. • If you dont strive to uncover what is unseen and understand its nature, you will be ill prepared to lead. • Its not the managers job to prevent risks. Its the managers job to make it safe for others to take them. • The cost of preventing errors is often far greater than the cost of fixing them.</span> <button onClick={toggle} className="mx-1 px-2 py-2 text-gray-400">{text}</button></p>

                    <div className="flex  mx-10">
                        <a href="/Creativity, Inc. ( PDFDrive ).pdf" target="_blank" rel="noopener noreferrer"
                            className="py-1 px-5 bg-blue-500 rounded hover:bg-blue-600 hover:text-blue-200 text-lg">Read</a>
                    </div>
                </div>

                <div className=" p-1 w-2/6  xl:w-1/4 ">
                    <img alt="cover" className=" object-contain object-center block" src="/Creativity, Inc. cover-1.png" />
                </div>

            </div>

            <div className="container mx-auto bg-transparent flex px-5 py-24 md:flex-row flex-col items-center">
                <iframe className=" w-full aspect-video" src="https://www.youtube.com/embed/-5KAN9_CzSA" title="coffee shop radio // 24/7 lofi hip-hop beats" alt="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">try listening to some
                        <br className="hidden lg:inline-block" />lofi music
                    </h1>
                    <p className="mb-8 leading-relaxed">Relaxing calm music</p>
                </div>
            </div>
        </section>
    )
}
export default BackGround