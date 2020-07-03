
let num = 2600
let startAngle = 0
let arc = Math.PI / num
let ctx

let canvas = document.getElementById("canvas")
let container = document.getElementsByClassName("container")
let currentWidth = canvas.width
let currentHeight = container.height

let outerRadius = currentWidth/2
let innerRadius = 0

canvas.onmouseover = handleSpinIncrease
canvas.onmouseleave = handleSpinDecrease
canvas.onclick = handleSpinStop

function drawSphere() {
    ctx = canvas.getContext("2d")
    for (let i = 0; i < num*2; i++) {
        let angle = startAngle + (i * arc)
        if (i%2 === 0) {
            ctx.fillStyle = "#f2dfbb"
        } else ctx.fillStyle = "white"
        //     ctx.fillStyle = "#a69eb0"
        // } else ctx.fillStyle = "#dadae3"
        ctx.beginPath()
        ctx.arc(outerRadius, outerRadius, outerRadius, angle, angle + arc, false)
        ctx.arc(outerRadius, outerRadius, innerRadius, angle + arc, angle, true)
        ctx.fill()
        ctx.save()
        ctx.restore()
    }
    canvas.style.animation = "wheelSpin 32s linear infinite"
}

drawSphere()

function handleSpinIncrease(){
    canvas.style.animation = "wheelSpin .000032s linear infinite"
}

function handleSpinDecrease(){
    canvas.style.animation = "wheelSpin 32s linear infinite"
}

function handleSpinStop(){
    canvas.style.animation = "wheelSpin 0s linear"
}