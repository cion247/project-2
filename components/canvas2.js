import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'

const Canvas = forwardRef((props, ref) => {
    const canvasRef = useRef(null)
    var gravity = 0.09
    var friction = 0.95
    var radius = 20


    useImperativeHandle(ref, () => ({
        callFunction(is) {
            gravity = is



        }
    }))




    const draw = (ctx, corX, corY, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#FF0000'
        ctx.beginPath()
        ctx.arc(corX, corY, radius, 0, 2 * Math.PI)
        ctx.fill()

    }



    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        let corX = 150;
        let corY = 20;
        let vy = 1;

        const render = () => {
            frameCount++

            if (corY + radius > context.canvas.height) {
                vy = -vy * friction
            } else {
                vy += gravity
            }
            corY += vy


            //console.log(context.canvas.width);

            draw(context, corX, corY, frameCount)

            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {

            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return <canvas ref={canvasRef} {...props} />
})

export default Canvas