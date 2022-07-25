import React, { useRef, useEffect, useState } from "react"
import Canvas from '../components/canvas'


const BgOne = () => {

    const [gravity, setGravity] = useState(1)
    const [friction, setFriction] = useState(1)
    const [radius, setRadius] = useState(20)

    function decrementGravity() {
        setGravity(prevGravity => prevGravity - 1)
        { () => grRef.current.callFunction(1) }
    }
    function incrementGravity() {
        setGravity(prevGravity => prevGravity + 1)
    }
    function decrementFriction() {
        setFriction(prevFriction => prevFriction - 1)
    }
    function incrementFriction() {
        setFriction(prevFriction => prevFriction + 1)
    }
    function decrementRadius() {
        setRadius(prevRadius => prevRadius - 10)
    }
    function incrementRadius() {
        setRadius(prevRadius => prevRadius + 10)
    }

    const grRef = useRef();




    return (
        <section class="text-white text-shadow-xl body-font  justify-center ">
            <div class="container  mx-auto flex px-5 py-5 flex-row itmes-start">
                <div>
                    <button onClick={() => grRef.current.callFunction(1)} className=" mb-4 h-7 items-center  bg-blue-500 border-0  px-2  hover:bg-blue-600 rounded">start</button>
                    <p>gravity</p>
                    <div className="flex flex-row mb-4 ">

                        <button onClick={decrementGravity} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {gravity} </span>
                        <button onClick={incrementGravity} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>

                    <p>radius</p>
                    <div className="flex flex-row min-w-min mb-4 ">

                        <button onClick={decrementRadius} className=" h-7 w-7 mr-1 bg-blue-500 hover:bg-blue-600 rounded">-</button>
                        <span> {radius} </span>
                        <button onClick={incrementRadius} className=" h-7 w-7 ml-1 bg-blue-500 hover:bg-blue-600 rounded">+</button>

                    </div>
                </div>


                <Canvas ref={grRef} className="w-11/12 h-11/12 justify-center bg-white" />
                {/* <canvas className="w-11/12 h-11/12 justify-center bg-white"></canvas>
                <script src="/canvas2.js" /> */}




            </div>


        </section >

    )

}
export default BgOne