import React, { useRef, useEffect, useState } from "react"
//import Canvas from './canvas2'
import Script from 'next/script'


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

    useEffect(() => {
        console.log("use effect activated");
        // Initial Setup
        var canvas = document.querySelector('canvas');
        var c = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;


        // Variables
        var mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        };

        var colors = [
            '#2185C5',
            '#7ECEFD',
            '#FFF6E5',
            '#FF7F66'
        ];

        var gravity = 0.2;
        var friction = 0.98;


        // Event Listeners
        addEventListener("mousemove", function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        addEventListener("resize", function () {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });

        addEventListener("click", function (event) {
            init();
            console.log("start");
        });


        // Utility Functions
        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }


        // Objects
        function Ball(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;

            this.update = function () {
                if (this.y + this.radius + this.dy > canvas.height) {
                    this.dy = -this.dy;
                    this.dy = this.dy * friction;
                    this.dx = this.dx * friction;
                } else {
                    this.dy += gravity;
                }

                if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
                    this.dx = -this.dx * friction;
                }

                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            };

            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
                c.stroke();
                c.closePath();
            };
        }


        // Implementation
        var ballArray = [];

        function init() {
            ballArray = [];

            for (let i = 0; i < 600; i++) {
                var radius = randomIntFromRange(8, 20);
                var x = randomIntFromRange(radius, canvas.width - radius);
                var y = randomIntFromRange(0, canvas.height - radius);
                var dx = randomIntFromRange(-3, 3)
                var dy = randomIntFromRange(-2, 2)
                ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);

            c.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < ballArray.length; i++) {
                ballArray[i].update();
            }
        }

        init();
        animate();
    });




    return (
        <section className="text-white text-shadow-xl body-font  justify-center ">
            <div className="container  mx-auto flex px-5 py-5 flex-row itmes-start">
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


                {/* <Canvas ref={grRef} className="w-11/12 h-11/12 justify-center bg-white" /> */}
                {/* <canvas className="w-11/12 h-11/12 justify-center "></canvas> */}
                <canvas className="w-11/12 h-11/12 justify-center bg-white"></canvas>





            </div>


        </section >

    )

}
export default BgOne