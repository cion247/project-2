import React, { useEffect, useState } from "react"

const BgOne = () => {

    const [gravity, setGravity] = useState(0.2)
    const [friction, setFriction] = useState(0.98)
    const [balls, setBalls] = useState(150)
    const colors = ['#62c0ff', '#41abf2', '#ffc7f7', '#939aff']

    const minusGravity = () => setGravity(prevGra => prevGra - 1)
    const plusGravity = () => setGravity(prevGra => prevGra + 1)
    const minusFriction = () => setFriction(prevFric => prevFric + 0.1)
    const plusFriction = () => setFriction(prevFric => prevFric - 0.1)
    const minusballs = () => setBalls(prevBalls => prevBalls - 50)
    const plusBalls = () => setBalls(prevBalls => prevBalls + 50)
    const ranIntGen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const ranColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

    useEffect(() => {
        console.log("use effect activated")
        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight
        const array = []
        addEventListener("click", () => start())


        const start = () => {
            array = []
            for (let i = 0; i < balls; i++) {
                const radius = ranIntGen(10, 30)
                const x = ranIntGen(radius, canvas.width - radius)
                const y = ranIntGen(0, canvas.height - radius)
                const dx = ranIntGen(-3, 3)
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

                        dy = -dy * friction; dx = dx * friction
                    } else {
                        dy += gravity
                    }
                    if (x + radius >= canvas.width || x - radius <= 0) {
                        dx = -dx * friction
                    }
                    x += dx; y += dy; draw()
                }
            }
        }
        start(); toRender()
    })

    return (
        <section className="text-white mt-32 text-shadow-xl flex-col text-xl justify-center ">
            <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" >GRAVITY SIMULATION:</h1>
                <p className="mb-8 leading-relaxed text-2xl  ">This is a simple model of gravity simulation where we can better understand how gravity and friction effects circular objects </p>
            </div>
            <div className="container  mx-auto flex px-5 py-5 flex-row itmes-start">

                <div>

                    <p>GRAVITY</p>
                    <div className="flex flex-row mb-4  ">

                        <button onClick={minusGravity} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {gravity.toFixed(2)} </span>
                        <button onClick={plusGravity} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                    <p>FRICTION</p>
                    <div className="flex flex-row mb-4 mt-1 ">

                        <button onClick={minusFriction} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {friction.toFixed(2)} </span>
                        <button onClick={plusFriction} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                    <p>BALLS</p>
                    <div className="flex flex-row  mb-4 mt-1">

                        <button onClick={minusballs} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {balls} </span>
                        <button onClick={plusBalls} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                </div>

                <canvas className="w-4/5 h-11/12 mx-auto justify-center bg-white bg-opacity-40 backdrop-blur-md rounded-2xl drop-shadow-lg"></canvas>

            </div>
        </section >
    )
}
export default BgOne