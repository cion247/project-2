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
            <div className="container mx-auto pt-10 flex px-5 pb-12  justify-center ">
                <div className="text-center  w-1/2 md:w-3/4 xl:w-full">
                    <h1 className="title-font text-2xl md:text-4xl 2xl:text-5xl mb-4 font-bold ">WELCOME TO LEARN CANVAS</h1>
                    <p className="mb-8 leading-relaxed text-2xl ">A simple interactive to website to learn about HTML canvas  <br />check out the rooms available to explore to see some projects made using HTML Canvas5.<br /><br />Canvas is an HTML element used to draw graphics and animation through JavaScript.
                        Canvas is a container for the graphics. We use JavaScript to draw the graphics and program their brhaviour based on functions.Canvas has several methods for drawing paths, boxes, circles, text, and adding images, these methods make it easy to use Canvas </p>
                </div>
            </div>

            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center
            min-h-min bg-[url('../public/pexels-aleksandar-pasaric-2603464.jpg')] rounded-3xl h-1/2 w-full bg-no-repeat bg-cover bg-fixed lg:flex-grow">
                <div className=" flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">


                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">READ SOME BOOKS
                        <br />Core HTML5 Canvas
                        by David Geary
                    </h1>
                    <p className="mb-8 leading-relaxed text-md  ">
                        This book is a painstakingly crafted, expertly written, code-fueled, no-nonsense deep dive into HTML5 Canvas printed in full color with syntax-highlighted code listings throughout.
                        Core HTML5 Canvas is written for experienced software developers with an intermediate-level understanding of JavaScript.
                        The result of two years full-time work by a long-time best-selling author, this book shows you how to implement anything you can imagine with the Canvas 2D API, from text editors to video games. Geary meticulously covers every detail of the API with crystal-clear writing so that you not only understand advanced concepts, but most importantly, you can modify the book's examples for your own specific use cases.
                        <span className={count}>Here are some of the things you will learn about in this book:<br />
                            1.The canvas element--using it with other HTML elements, handling events, printing a canvas, and using offscreen canvases<br />
                            2.Shapes--drawing, dragging, erasing, and editing lines, arcs, circles, curves, and polygons; using shadows, gradients, and patterns<br />
                            3.Text--drawing, positioning, setting font properties; building text controls<br />
                            4.Images--drawing, scaling, clipping, processing, and animating<br />
                            5.Animations--creating smooth, efficient, and portable animations
                            Sprites--implementing animated objects that have painters and behaviors<br />
                            3.Physics--modeling physical systems (falling bodies, pendulums, and projectiles), and implementing tweening for nonlinear motion and animation </span> <button onClick={toggle} className="mx-1 px-2 py-2 text-gray-400">{text}</button></p>

                    <div className="flex  mx-10">
                        <a href="/Core HTML5 Canvas - Graphics, Animation, and Game Development.pdf" target="_blank" rel="noopener noreferrer"
                            className="py-1 px-5 bg-blue-500 rounded hover:bg-blue-600 hover:text-blue-200 text-lg">Download</a>
                    </div>
                </div>

                <div className=" p-1 w-2/6  xl:w-1/4 ">
                    <img alt="cover" className=" object-contain object-center block" src="/cover_page-0001.jpg" />
                </div>

            </div>

            <div className="container mx-auto bg-transparent flex px-5 py-24 md:flex-row flex-col items-center">
                <iframe className=" w-full aspect-video" src="https://www.youtube.com/embed/gm1QtePAYTM" title="HTML5 Canvas API Crash Course" alt="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>



                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium ">Some Resource to learn HTML canvas:
                        <br className="hidden lg:inline-block" />HTML5 Canvas API Crash Course
                    </h1>

                </div>
            </div>
            <div className="container mx-auto bg-transparent flex px-5 py-24 md:flex-row flex-col items-center">


                <iframe className=" w-full aspect-video" src="https://www.youtube.com/embed/Yvz_axxWG4Y" title="HTML5 Canvas CRASH COURSE for Beginners" alt="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium ">Some Resource to learn HTML canvas:
                        <br className="hidden lg:inline-block" /> HTML5 Canvas CRASH COURSE for Beginners
                    </h1>

                </div>
            </div>
        </section>
    )
}
export default BackGround