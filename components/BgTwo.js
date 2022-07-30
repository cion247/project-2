import React, { useRef, useEffect, useState } from "react"

const BgTwo = () => {

    const canvasRef = useRef(null)

    const [aThing, setThing] = useState(true)
    const colors = ['#92f95b', '#41abf2', '#ffc7f7', '#939aff']
    const isOn = false
    const array = []



    const ranIntGen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const ranColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

    useEffect(() => {

        const canvas = canvasRef.current
        const c = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight
        const aiY = ranIntGen(0, canvas.width / 2)
        const p1Y = aiY




        document.getElementsByName("Thing")[0].addEventListener("click", () => { start() })

        canvas.addEventListener('mousedown', () => { isOn = true })
        canvas.addEventListener('mousemove', (e) => { if (isOn) { p1Y = e.offsetY * 1.4 } })
        window.addEventListener('mouseup', () => { if (isOn) { isOn = false } })

        const start = () => {

            array = []
            aiY = ranIntGen(0, canvas.width / 2)
            const radius = ranIntGen(40, 60)
            const x = ranIntGen(radius, canvas.width / 2 - radius)
            const y = ranIntGen(60, canvas.height - radius - 20)
            const dx = ranIntGen(10, 15)
            const dy = ranIntGen(5, 10)
            array.push(new items(x, y, dx, dy, radius, ranColor(colors)))
            array.push(new AiBar(canvas.width - 20, dy))
            array.push(new player1(20, p1Y))

        }
        const toRender = () => {
            requestAnimationFrame(toRender);
            c.clearRect(0, 0, canvas.width, canvas.height)
            backdrop()
            array[0].refresh()

        }
        const backdrop = () => {
            c.beginPath()
            c.rect(canvas.width / 2, 0, 7, canvas.height)
            c.fillStyle = 'white'
            c.fill(); c.stroke(); c.closePath()
        }

        class items {
            constructor(x, y, dx, dy, radius, color) {
                const draw = () => {
                    c.beginPath()
                    c.arc(x, y, radius, 0, Math.PI * 2, false)
                    c.fillStyle = color; c.fill(); c.stroke(); c.closePath()
                }
                this.refresh = () => {
                    if (x + radius > canvas.width - 25 && x + radius < canvas.width - 5 && y > aiY - 40 && y < aiY + 120 || x - radius < 25 && x - radius > 5 && y > p1Y - 40 && y < p1Y + 140) {
                        dx = -dx
                    }
                    if (y + radius >= canvas.height || y - radius <= 0) {
                        dy = -dy
                    }
                    (dx > 0) ? (dx += 0.01) : (dx -= 0.01)

                    y += dy; x += dx
                    array[1].refresh(x, y)
                    array[2].refresh(p1Y)
                    draw()
                }
            }
        }
        class AiBar {
            constructor(x, dy) {
                dy += 2

                const draw = () => {
                    c.beginPath()
                    c.rect(x, aiY, 10, 80)
                    c.fillStyle = 'white'
                    c.fill(); c.stroke(); c.closePath()
                }
                this.refresh = (x2, y2) => {
                    if (x2 > canvas.width / 4) {
                        if (aiY + 40 <= y2) {
                            aiY += dy
                        }
                        if (aiY + 40 >= y2) {
                            aiY -= dy
                        }
                    }
                    draw()
                }
            }
        }
        class player1 {
            constructor(x, p1Y) {

                const draw = () => {
                    c.beginPath()
                    c.rect(x, p1Y, 10, 100)
                    c.fillStyle = 'white'
                    c.fill(); c.stroke(); c.closePath()
                }
                this.refresh = (y) => {
                    p1Y = y
                    draw()
                }
            }
        }
        backdrop()
        start(); toRender()
    }, [aThing])

    return (
        <section className="text-white mt-32 text-shadow-xl flex-col text-xl justify-center ">
            <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" >Space Pong:</h1>
                <p className="mb-8 leading-relaxed text-2xl  ">This is a simple model of gravity simulation where we can better understand how gravity and mass effects circular objects </p>
            </div>
            <div className="container  mx-auto flex px-5 py-5 flex-row itmes-start">

                <div>
                    <p className="mt-10">RE-RENDER</p>
                    <button name="Thing" onClick={() => setThing(!aThing)} className=" h-7 w-14 mr-1 bg-blue-500 hover:bg-blue-600 rounded mb-3 mt-1">start</button>

                </div>

                <canvas ref={canvasRef} name="canv" className="w-4/5 h-11/12 mx-auto justify-center bg-black bg-opacity-40 backdrop-blur-md rounded-2xl drop-shadow-lg"></canvas>

            </div>
        </section >
    )
}
export default BgTwo