var rad = 0
var s,p,e,f, bg
var s_img, p_img, e_img, f_img, bg_img
function preload(){
bg_img = loadImage("./images/space.jpg")

s_img = loadImage("./images/sun.png");

p_img = loadImage("./images/earth.png");

e_img = loadImage("./images/jupiter.png");

f_img = loadImage("./images/saturn.png");

}
var siz = 0;
function setup() {
  createCanvas(800,800);
  bg = createSprite(400,400,800,800);
  bg.addImage(bg_img);
  bg.scale = 4 ;
  s = createSprite(400, 400, 50, 50);
  s.addImage(s_img);
  s.setCollider("circle",0,0,270);
  p = createSprite(400, 509.5, 15, 15);
  p.addImage(p_img);
  p.scale = 0.07;
  p.setCollider("circle")
  e = createSprite(400, 609.5 , 20, 20);
  e.addImage(e_img);
  e.scale = 0.07;
  e.setCollider("circle",0,0,270)
  f = createSprite(400, 709.5 , 17, 17);
  f.addImage(f_img);
  f.scale = 0.045;
  f.setCollider("circle")
}

function draw() {
  background(255,255,255);
  drawSprites();
  var d = p.y - s.y
  rad = rad - 30
  var radi = rad/180*22/7
  p.setSpeedAndDirection(1, Math.round(radi))
  rad2 = rad - 40
  var radi2 = rad2/180*22/7
  e.setSpeedAndDirection(1.8, Math.round(radi2))
  rad3 = rad - 50
  var radi3 = rad3/180*22/7
  f.setSpeedAndDirection(2.6, Math.round(radi3))
  siz = siz + 0.0005;
  s.scale =0.2 +  siz;
  if(s.isTouching(p)){
    p.destroy()
  }else if(s.isTouching(e)){
    e.destroy()
  } else if(s.isTouching(f)){
    f.destroy()
  }
}