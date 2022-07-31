import React, { useRef, useEffect, useState } from "react"

const BgOne = () => {

    const canvasRef = useRef(null)

    const [aThing, setThing] = useState(true)
    const [gravity, setGravity] = useState(1)
    const [mass, setFriction] = useState(1)
    const [balls, setBalls] = useState(100)
    const colors = ['#92f95b', '#41abf2', '#ffc7f7', '#939aff']

    const ranIntGen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const ranColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

    useEffect(() => {

        const canvas = canvasRef.current
        const c = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight
        const array = []

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
            <div className="container  mx-auto flex px-5 py-5 flex-row itmes-start">
                <canvas ref={canvasRef} className="w-4/5 h-11/12 mx-auto justify-center bg-white bg-opacity-40 backdrop-blur-md rounded-2xl drop-shadow-lg"></canvas>
            </div>
        </section >
    )
}
export default BgOne