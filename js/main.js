
let num = 1000
let startAngle = 0
let arc = Math.PI / num
let ctx
let outerRadius = 250
let numRadius = 200
let innerRadius = 0
let winningNumber
let winningSegment
let landingSpot

let canvas = document.getElementById("canvas")
let playerNumber = document.querySelector("input")
let message = document.getElementById("message")

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