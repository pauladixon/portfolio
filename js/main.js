let num = 1250
let startAngle = 0
let arc = Math.PI / num
let ctx
let outerRadius = 225
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
        } else ctx.fillStyle = "#aaaaaa"
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