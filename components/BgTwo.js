import React, { useRef, useEffect, useState } from "react"

const BgTwo = () => {

    const canvasRef = useRef(null)

    const [aThing, setThing] = useState(true)
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const colors = ['#92f95b', '#41abf2', '#ffc7f7', '#939aff']
    const isOn = false
    const array = []



    const ranIntGen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const ranColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

    useEffect(() => {

        setScore1(0)
        setScore2(0)
        const canvas = canvasRef.current
        const c = canvas.getContext('2d')
        canvas.width = innerWidth
        canvas.height = innerHeight
        const aiY = ranIntGen(0, canvas.width / 2)
        const p1Y = aiY


        canvas.addEventListener('mousedown', () => { isOn = true })
        canvas.addEventListener('mousemove', (e) => { if (isOn) { p1Y = e.offsetY * 1.4 } })
        window.addEventListener('mouseup', () => { if (isOn) { isOn = false } })

        const start = () => {

            array = []
            aiY = ranIntGen(0, canvas.width / 2)
            const radius = ranIntGen(40, 60)
            const x = ranIntGen(radius, canvas.width / 2 - radius)
            const y = ranIntGen(60, canvas.height - radius - 20)
            const dx = ranIntGen(5, 10)
            const dy = ranIntGen(5, 10)
            array.push(new items(x, y, dx, dy, radius, ranColor(colors)))
            array.push(new AiBar(canvas.width - 30, dy))
            array.push(new player1(30, p1Y))

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
                    if (x + radius > canvas.width - 35 && x + radius < canvas.width - 5 && y > aiY - 40 && y < aiY + 120 || x - radius < 35 && x - radius > 5 && y > p1Y - 40 && y < p1Y + 140) {
                        dx = -dx
                    } if (y + radius >= canvas.height || y - radius <= 0) {
                        dy = -dy
                    } if (dx > -30 && dx < 30) {
                        (dx > 0) ? (dx += 0.01) : (dx -= 0.01)
                    }
                    y += dy; x += dx
                    if (x > canvas.width + ((canvas.width * 3) / 4)) {
                        setScore1(prevSc => prevSc + 1)
                        start()
                    } if (x < (-canvas.width * 3) / 4) {
                        setScore2(prevSc2 => prevSc2 + 1)
                        start()
                    }
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
        <section className="text-white mt-10 text-shadow-xl flex-col text-xl justify-center ">
            <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium" >Pong:</h1>
                <p className="mb-8 leading-relaxed text-2xl  ">Pong was one of the first computer games created, it is a simple table tennis like game played with bars on a gravity less plane<br />click and drag on the left side of the board control your player </p>
                <div>
                    <p className="mt-10">RE-RENDER</p>
                    <button onClick={() => setThing(!aThing)} className=" h-7 w-14 mr-1 bg-blue-500 hover:bg-blue-600 rounded mb-3 mt-1">start</button>

                </div>
            </div>
            <div className="container mx-auto flex pl-5 flex-row  justify-center sm:text-4xl text-3xl">
                <p>Player1: {score1}  --|--   {score2} :PlayerBot </p>
            </div>
            <div className="container  mx-auto flex px-5 py-5 flex-row itmes-start">



                <canvas ref={canvasRef} name="canv" className="w-4/5 h-11/12 mx-auto justify-center bg-black bg-opacity-40 backdrop-blur-md rounded-2xl drop-shadow-lg"></canvas>

            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >How Its Working:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the initializations are not very different, now we just set the score to 0 before every game we start and give new spawn coordinates to the bot and the player bar</p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain object-center justify-center block" src="/code4.1.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >the start and render functions:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the start and render functions do the same task of creating each object (the ball, the botBar the playerBar) separately the render function again, clears and animates all the motion shown in the canvas (Start and render functions are explained in more detail in the room one) </p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain object-center justify-center block" src="/code4.2.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >the Items class:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the item class initializes the ball object, the main logic in the .refresh method is determines the behaviour of the ball and how it acts based on the players and the wall, the logic compares the Y-coordinate of each element when they are close to determine if the ball should bounce back or slip through, the speed of the ball(dx) gradually increases as the game goes on. The  setScore function at the bottom count the score of the players<br />it then calls the function of each player-bar to update their position  </p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain object-center justify-center block" src="/code5.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >Bot Player:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the bot is a class named AiBar the bar behaves based on the position of the ball and adjusts it's y-coordinate to be closest to the ball's centre-Y-coordinate, the AiBar's speed is almost the same as the ball in the beginnig but doesn't speed up like the ball  </p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain object-center justify-center block" src="/code6.png" />
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center min-h-min blg:flex-grow">
                <div className=" container mx-auto flex flex-col  items-start text-start md:pr-16 md:w-3/4 xl:w-full  lg:flex-grow ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 px-5 font-medium" >Player one:</h1>
                    <p className="mb-8 leading-relaxed text-2xl px-5 "> the User can control the Player1 object the position is updated based on the Y coordinate received in the items class call (p1Y) which gets updated using eventListeners which sets the p1Y value based on the Y-coordinate of the computer-mouse )</p>
                </div>
                <div className=" p-1 w-1/3  xl:w-2/3 ">
                    <img alt="cover" className=" object-contain justify-center object-center block" src="/code7.png" />
                </div>
            </div>
        </section >
    )
}
export default BgTwo