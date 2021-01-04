const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world

function preload(){
    polygonimg=loadImage("polygon.png")
}

function setup(){
createCanvas(1500,700)
engine = Engine.create()
world = engine.world

var ball_options={
    restitution:1,
    density:0.5,
    isStatic:false

}
ball= Bodies.circle(50,200,40)
World.add(world,ball)

ground = new Ground (750,650,1500,10)

base1 = new Ground (900,600,400,5)
base2 = new Ground (1100,300,400,5)

//level 1 base 1
box1 = new Box (750,550,50,50)
box2 = new Box (800,550,50,50)
box3 = new Box (850,550,50,50)
box4 = new Box (900,550,50,50)
box5 = new Box (950,550,50,50)
box6 = new Box (1000,550,50,50)
box7 = new Box (1050,550,50,50)

//level 2
box8 = new Box (800,500,50,50)
box9 = new Box (850,500,50,50)
box10 = new Box (900,500,50,50)
box11 = new Box (950,500,50,50)
box12 = new Box (1000,500,50,50)

//level 3
box13 = new Box (850,450,50,50)
box14 = new Box (900,450,50,50)
box15 = new Box (950,450,50,50)

//level 4
box16 = new Box (900,400,50,50)

//level 1 base 2
box17 = new Box (950,250,50,50)
box18 = new Box (1000,250,50,50)
box19 = new Box (1050,250,50,50)
box20 = new Box (1100,250,50,50)
box21 = new Box (1150,250,50,50)
box22 = new Box (1200,250,50,50)
box23 = new Box (1250,250,50,50)

//level 2 
box24 = new Box (1000,200,50,50)
box25 = new Box (1050,200,50,50)
box26 = new Box (1100,200,50,50)
box27 = new Box (1150,200,50,50)
box28 = new Box (1200,200,50,50)

//level3
box29 = new Box (1050,150,50,50)
box30 = new Box (1100,150,50,50)
box31 = new Box (1150,150,50,50)

//level4
box32 = new Box (1100,100,50,50)


sling = new Slingshot(ball.body,{x:500,y:400})
}

function draw(){
    background("white")

    Engine.update(engine)
    imageMode(CENTER)
    image(polygonimg,ball.position.x,ball.position.y,50,50)

ground.display()
base1.display()


box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()

box8.display()
box9.display()
box10.display()
box11.display()
box12.display()

box13.display()
box14.display()
box15.display()

box16.display()

base2.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()

box24.display()
box25.display()
box26.display()
box27.display()
box28.display()

box29.display()
box30.display()
box31.display()

box32.display()

chain.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(this.ball);
    }
}