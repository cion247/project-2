import React, { useRef, useEffect, useState } from "react"

const BgOne = () => {

    const canvasRef = useRef(null)

    const [aThing, setThing] = useState(true)
    const [gravity, setGravity] = useState(1)
    const [mass, setFriction] = useState(1)
    const [balls, setBalls] = useState(100)
    const colors = ['#92f95b', '#41abf2', '#ffc7f7', '#939aff']
    //

    const minusGravity = () => setGravity(prevGra => prevGra - 1)
    const plusGravity = () => setGravity(prevGra => prevGra + 1)
    const minusFriction = () => setFriction(prevFric => prevFric - 1)
    const plusFriction = () => setFriction(prevFric => prevFric + 1)
    const minusballs = () => setBalls(prevBalls => prevBalls - 50)
    const plusBalls = () => setBalls(prevBalls => prevBalls + 50)
    const ranIntGen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const ranColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

    useEffect(() => {

        const canvas = canvasRef.current
        const c = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight
        const array = []

        document.getElementsByName("Thing")[0].addEventListener("click", () => { start() })


        const start = () => {

            array = []
            for (let i = 0; i < balls; i++) {
                const radius = ranIntGen(30, 50)
                const x = ranIntGen(radius, canvas.width - radius)
                const y = ranIntGen(0, canvas.height - radius)
                const dx = ranIntGen(-1, 1)
                const dy = ranIntGen(-2, 2)
                array.push(new items(x, y, dx, dy, radius, ranColor(colors)))
            }
        }
        const toRender = () => {
            requestAnimationFrame(toRender);
            c.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < array.length; i++) {
                array[i].refresh()
            }
        }

        class items {
            constructor(x, y, dx, dy, radius, color) {

                const draw = () => {
                    c.beginPath()
                    c.arc(x, y, radius, 0, Math.PI * 2, false)
                    c.fillStyle = color; c.fill(); c.stroke(); c.closePath()
                }
                this.refresh = () => {
                    if (y + radius + dy > canvas.height) {

                        dy = -dy * (1 - mass * 0.05); dx = dx * (1 - mass * 0.05)
                    } else {
                        dy += gravity
                    }
                    if (x + radius >= canvas.width || x - radius <= 0) {
                        dx = -dx * (1 - mass * 0.05)
                    }
                    x += dx; y += dy; draw()
                }
            }
        }
        start(); toRender()
    }, [aThing])

    return (
        <section className="text-white mt-10 text-shadow-xl flex-col text-xl justify-center ">
            <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >GRAVITY SIMULATION:</h1>
                <p className="mb-8 leading-relaxed text-2xl px-5 ">This is a simple model of gravity simulation where we can better understand how gravity and mass effects circular objects in this model we can change the given Gravity and the mass of the objects to see different results in the emulation</p>
            </div>
            <div className="container  mx-auto flex px-5 py-5 flex-row itmes-start">

                <div>
                    <p className="mt-10">RE-RENDER</p>
                    <button name="Thing" onClick={() => setThing(!aThing)} className=" h-7 w-14 mr-1 bg-blue-500 hover:bg-blue-600 rounded mb-3 mt-1">start</button>



                    <p>GRAVITY</p>
                    <div className="flex flex-row mb-4 mt-1 ">

                        <button onClick={minusGravity} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {gravity} </span>
                        <button onClick={plusGravity} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                    <p>MASS</p>
                    <div className="flex flex-row mb-4 mt-1 ">

                        <button onClick={minusFriction} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {mass} </span>
                        <button onClick={plusFriction} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                    <p>BALLS</p>
                    <div className="flex flex-row  mb-4 mt-1">

                        <button onClick={minusballs} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {balls} </span>
                        <button onClick={plusBalls} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                </div>

                <canvas ref={canvasRef} className="w-4/5 h-11/12 mx-auto justify-center bg-white bg-opacity-40 backdrop-blur-md rounded-2xl drop-shadow-lg"></canvas>

            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >Galileo's Leaning Tower of Pisa experiment</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the Italian scientist Galileo Galilei is said to have dropped two spheres of different masses from the Leaning Tower of Pisa to demonstrate that their time of descent was independent of their mass<br /><br /> We can conduct the same experiment using our gravity emulation, when we change the mass of the balls they become light bouncy, just like soccer balls, but when we increase the mass they become heavy like metal balls</p>
                </div>
                <div className=" p-1 w-2/6  xl:w-1/4 ">
                    <img alt="cover" className=" object-contain object-center block" src="/0_1qYx21VpOO9lQHnR.jpg" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >How it's working:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> first we will initialize the canvas element through referece, other methods include using document.querySelector, document.getElementsByName and document.getElementById  methods we then initialize the context of the canvas to "2d" to work with a two dimensional workspace and finally we give our canvas a width and height,  the array initialization is to store all the objects generated in the next function  </p>
                </div>
                <div className=" p-1 w-2/6  xl:w-2/4 justify-center  ">
                    <img alt="cover" className=" object-contain justify-center  object-center block" src="/code1.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >start function:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the start function is where we create all the ball objects using a for loop we initialize all the necessary variables using a random int generator and generate a object using the items class, the objects are stored in the array and the length of the for loop determines the amount of objects being rendered</p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain object-center justify-center block" src="/code2.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >The item class:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the item class takes in all the variables using a constructor and creates a object and sends it back into the for loop to store in the array, the .this() method is where the logic for the emulation lies, the x and y coordinates change based on dx and dy and are effected by mass and gravity  </p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain object-center justify-center block" src="/code3.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >the  render function:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the render function is finally use to create the animation, the requestAnimationFrame method re-runs the function every time the screen changes frames, the clearRect() method is use to clear the screen before every redraw then all the objects stored in the array are rendered through the .refresh method
                        the refresh method calls the update function from the items class and updates the position of the objects based of the logic in .refresh() and draws the objects with draw() function
                        the whole render process repeats every time the screen moves to the next frame</p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain justify-center object-center block" src="/code4.png" />
                </div>
            </div>
        </section >
    )
}
export default BgOne