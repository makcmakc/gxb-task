let variable = document.querySelector('.variable')

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Grid {
	constructor() {
		
	}
}

ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'
ctx.moveTo(100, 300)
ctx.lineTo(100, 100)
ctx.stroke()