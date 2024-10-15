function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  strokeWeight(1)
  fill(189, 189, 191)
  ellipse(300, 150, 200, 200);

  fill(250)
  circle(295,410,50)
  rect(200,150,200,250)
  rect(210,170,20,210)
  rect(370,170,20,210)
  
  line(210,250,230,250)
  line(210,255,230,255)
  line(210,260,230,260)
  line(210,265,230,265)
  
  
  fill(41, 41, 240)
  quad(265, 110, 280, 70, 310, 70, 325, 110);
  rect(270,120,50,25)
  rect(210,115,15,30,)
  rect(240,115,15,30,)
  rect(370,115,15,30)
  rect(260,160,70,10)
  rect(260,180,70,10)
  rect(260,200,70,10)
  rect(260,260,70,120)
  
  fill(230, 230, 230)
  circle(345,130,30)
 
  fill(189, 189, 191)
  circle(295,290,50)
  circle(295,350,50)
  
  fill(0)
  circle(295,95,20)
  circle(295,135,15)
  circle(345,130,10)
  
  fill(250)
  quad(200,400,220,420,380,420,400,400)

  strokeWeight(8)
  line(295,400,295,420)
  line(245,400,245,420)
  line(345,400,345,420)
  
  strokeWeight(1)
  rect(160,150,40,80)
  rect(400,150,40,80)
  rect(165,230,20,175)
  rect(415,230,20,175)
  
  beginShape()
  vertex(165,405)
  vertex(140,460)
  vertex(165,480)
  vertex(185,480)
  vertex(205,460)
  vertex(185,405)
  endShape()

  beginShape()
  vertex(415,405)
  vertex(390,460)
  vertex(415,480)
  vertex(435,480)
  vertex(455,460)
  vertex(435,405)
  endShape()
  
}