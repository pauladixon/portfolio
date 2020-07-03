
let num = 630
let startAngle = 0
let arc = Math.PI / num
let ctx

let canvas = document.getElementById("canvas")
window.addEventListener('resize', handleResize)

canvas.onmouseover = handleSpinIncrease
canvas.onmouseleave = handleSpinDecrease
canvas.onclick = handleSpinStop

function drawSphere(x = 225, y = 225, outerRadius = 225) {
    ctx = canvas.getContext("2d")
    for (let i = 0; i < num*2; i++) {
        let angle = startAngle + (i * arc)
        if (i%2 === 0) {
            ctx.fillStyle = "#291f17"
        } else ctx.fillStyle = "#f0eadc"
        ctx.beginPath()
        ctx.arc(x, y, outerRadius, angle, angle + arc, false)
        ctx.arc(x, y, 0, angle + arc, angle, true)
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

function handleResize(){
    if (window.innerWidth < 376) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.width = 375
        canvas.style.height = 375
        drawSphere(237.5, 237.5, 212.15)
    } else if (window.innerWidth > 375) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSphere()
    }
}
