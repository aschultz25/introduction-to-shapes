function setup() {
  createCanvas(600, 600)
}

let bodyX = 295
let bodyY = 300
let bodyWidth = 200
let bodyHeight = 250
let tummyWidth = 70
let tummyHeight = 10
let armWidth = 20
let shoulderWidth = 40
let shoulderHeight = 80
let shoulderXOffset = 160
let shoulderYOffset = 150

function draw() {
  background(250)

  // Head
  strokeWeight(1)
  fill(189, 189, 191)
  ellipse(300, 150, 200, 200)

  // Body
  fill(250)
  circle(bodyX, bodyY + 110, 50)
  rect(bodyX - bodyWidth / 2, 150, bodyWidth, bodyHeight)
  rect(210, 170, armWidth, 210) 
  rect(370, 170, armWidth, 210) 

  for (let i = 250; i <= 265; i += 5) {
    line(210, i, 230, i)
  }

  // head details
  fill(41, 41, 240)
  quad(265, 110, 280, 70, 310, 70, 325, 110) 
  rect(270, 120, 50, 25) 
  rect(210, 115, 15, 30) 
  rect(240, 115, 15, 30) 
  rect(370, 115, 15, 30) 

  // tummy details  
  rect(bodyX - tummyWidth / 2, 160, tummyWidth, tummyHeight)
  rect(bodyX - tummyWidth / 2, 180, tummyWidth, tummyHeight)
  rect(bodyX - tummyWidth / 2, 200, tummyWidth, tummyHeight)
  rect(bodyX - tummyWidth / 2, 260, tummyWidth, 120)

  fill(230, 230, 230)
  circle(345, 130, 30) 
  
  fill(189, 189, 191)
  circle(bodyX, 290, 50) 
  circle(bodyX, 350, 50) 
  
  fill(0)
  circle(bodyX, 95, 20) 
  circle(bodyX, 135, 15) 
  circle(345, 130, 10) 


  fill(250)
  quad(200, 400, 220, 420, 380, 420, 400, 400)

  strokeWeight(8)
  line(bodyX, 400, bodyX, 420)
  line(bodyX - 50, 400, bodyX - 50, 420) 
  line(bodyX + 50, 400, bodyX + 50, 420)

  // Arms and shoulders. I messed up the shoulders slightly and I aknowledge that. I will have to work on them more to get them right. 
  strokeWeight(1)
  rect(shoulderXOffset, shoulderYOffset, shoulderWidth, shoulderHeight) 
  rect(400, shoulderYOffset, shoulderWidth, shoulderHeight) 
  rect(shoulderXOffset + 5, 230, armWidth, 175) 
  rect(415, 230, armWidth, 175)

  // Feet
  beginShape()
  vertex(165, 405)
  vertex(140, 460)
  vertex(165, 480)
  vertex(185, 480)
  vertex(205, 460)
  vertex(185, 405)
  endShape()

  beginShape()
  vertex(415, 405)
  vertex(390, 460)
  vertex(415, 480)
  vertex(435, 480)
  vertex(455, 460)
  vertex(435, 405)
  endShape()
}
