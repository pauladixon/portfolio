
let num = 910
let startAngle = 0
let arc = Math.PI / num
let ctx
let outerRadius = 225
let numRadius = 200
let innerRadius = 0

let canvas = document.getElementById("canvas")

canvas.onmouseover = handleSpinIncrease
canvas.onmouseleave = handleSpinDecrease
canvas.onclick = handleSpinStop

function drawSphere() {
    ctx = canvas.getContext("2d")
    for (let i = 0; i < num*2; i++) {
        let angle = startAngle + (i * arc)
        if (i%2 === 0) {
            ctx.fillStyle = "#c7a984"
        } else ctx.fillStyle = "#cccccc"
        ctx.beginPath()
        ctx.arc(250, 250, outerRadius, angle, angle + arc, false)
        ctx.arc(250, 250, innerRadius, angle + arc, angle, true)
        ctx.fill()
        ctx.save()
        ctx.translate(250 + Math.cos(angle + arc / 2) * numRadius,
            250 + Math.sin(angle + arc / 2) * numRadius)
        ctx.rotate(angle + arc / 2 + Math.PI / 2)
        ctx.restore()
    }
    canvas.style.animation = "wheelSpin 100s linear infinite"
}

drawSphere()

function handleSpinIncrease(){
    canvas.style.animation = "wheelSpin 15s linear infinite"
}

function handleSpinDecrease(){
    canvas.style.animation = "wheelSpin 100s linear infinite"
}

function handleSpinStop(){
    canvas.style.animation = "wheelSpin 0s linear"
}