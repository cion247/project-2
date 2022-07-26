import React, { useEffect, useState } from "react"

const BgOne = () => {

    const [gravity, setGravity] = useState(0.2)
    const [friction, setFriction] = useState(0.98)
    const [balls, setBalls] = useState(150)
    var colors = ['#62c0ff', '#41abf2', '#ffc7f7', '#939aff']

    const decrementGravity = () => setGravity(prevGravity => prevGravity - 1)
    const incrementGravity = () => setGravity(prevGravity => prevGravity + 1)
    const decrementFriction = () => setFriction(prevFriction => prevFriction + 0.1)
    const incrementFriction = () => setFriction(prevFriction => prevFriction - 0.1)
    const decrementballs = () => setBalls(prevBalls => prevBalls - 50)
    const incrementBalls = () => setBalls(prevBalls => prevBalls + 50)
    const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const randomColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

    useEffect(() => {
        console.log("use effect activated")

        var canvas = document.querySelector('canvas')
        var c = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight

        addEventListener("click", () => init())

        function Ball(x, y, dx, dy, radius, color) {
            this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.radius = radius; this.color = color

            this.update = () => {
                if (this.y + this.radius + this.dy > canvas.height) {
                    this.dy = -this.dy
                    this.dy = this.dy * friction
                    this.dx = this.dx * friction
                } else {
                    this.dy += gravity
                }

                if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
                    this.dx = -this.dx * friction
                }

                this.x += this.dx
                this.y += this.dy
                this.draw()
            }

            this.draw = () => {
                c.beginPath()
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                c.fillStyle = this.color
                c.fill()
                c.stroke()
                c.closePath()
            }
        }
        var ballArray = []
        const init = () => {
            ballArray = []

            for (let i = 0; i < balls; i++) {
                var radius = randomIntFromRange(10, 30)
                var x = randomIntFromRange(radius, canvas.width - radius)
                var y = randomIntFromRange(0, canvas.height - radius)
                var dx = randomIntFromRange(-3, 3)
                var dy = randomIntFromRange(-2, 2)
                ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)))
            }
        }

        const animate = () => {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < ballArray.length; i++) {
                ballArray[i].update()
            }
        }
        init()
        animate()
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

                        <button onClick={decrementGravity} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {gravity} </span>
                        <button onClick={incrementGravity} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                    <p>FRICTION</p>
                    <div className="flex flex-row mb-4 mt-1 ">

                        <button onClick={decrementFriction} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {friction.toFixed(2)} </span>
                        <button onClick={incrementFriction} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                    <p>BALLS</p>
                    <div className="flex flex-row  mb-4 mt-1">

                        <button onClick={decrementballs} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {balls} </span>
                        <button onClick={incrementBalls} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                </div>

                <canvas className="w-4/5 h-11/12 mx-auto justify-center bg-white bg-opacity-40 backdrop-blur-md rounded-2xl drop-shadow-lg"></canvas>

            </div>
        </section >
    )
}
export default BgOne