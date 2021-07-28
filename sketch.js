var ball,ball2;
var db,pos,pos1;
var imp;
var gamestate="play";
function setup(){
   var can= createCanvas(500,500);
    db=firebase.database();
    inp=prompt("hunter or hider");
    ball = createSprite(250,250,20,20);
    ball2 = createSprite(250,250,20,20);
    var ballpos=db.ref('ball/pos');
    ballpos.on('value',readPosition);
    var ballpos2=db.ref('ball/pos1');
    ballpos2.on('value',readPosition1);
    db.ref("ball/pos").set({
        "x":125,
        "y":10,
       })    
       db.ref("ball/pos1").set({
        "x":325,
        "y":10,
       })  
     }

function draw(){
    background("white");
   if(ball.x>400||ball.x<0){
    if(ball.x>400){
   ball.x-=2 
    }  
      if(ball.x<0){
   ball.x+=2 
    }  
   }
   if(ball2.x>400||ball2.x<0){
    if(ball2.x>400){
   ball2.x-=2 
    }  
      if(ball2.x<0){
   ball2.x+=2 
    }  
   }
   //break
   if(ball.y>400||ball.y<0){
    if(ball.y>400){
   ball.y-=2 
    }  
      if(ball.y<0){
   ball.y+=2 
    }  
   }
   if(ball2.y>400||ball2.y<0){
    if(ball2.y>400){
   ball2.y-=2 
    }  
      if(ball2.y<0){
   ball2.y+=2 
    }  
   }
    console.log(frameCount)
   if(gamestate=="over"){
    if(frameCount>=3600){
        if(inp=="hunter"){
            textSize(20);
        text("you lose LOl!",200,200);
        }
        else if(inp=="hider"){
            textSize(20);
            text("YOU WIN!!!",200,200)
        }
    }
    }
    frameRate=60;
    if (ball.isTouching(ball2)) {
        gamestate="over";
        if(inp=="hunter"){
            textSize(20);
        text("YOU WIN!!!",200,200);
        }
        else if(inp=="hider"){
            textSize(20);
            text("you lose LOL!",200,200)
        }
      }
      if(gamestate=="play"){
    if(inp=="hunter"){
        ball.shapeColor="red"
        if(keyDown(LEFT_ARROW)){
            changePosition(-5,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(5,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-5);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+5);
        }
    }
    if(inp=="hider"){
        ball2.shapeColor="lime"
        if(keyDown(LEFT_ARROW)){
            changePosition1(-5,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition1(5,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition1(0,-5);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition1(0,+5);
        }
    } 
}
    // db.ref("chat").set({
    //     "send1":inp.value()
    // })
    drawSprites();
}

function changePosition(x,y){
    db.ref("ball/pos").set({
     "x":pos.x+x,
     "y":pos.y+y,
    })    
}
function changePosition1(x,y){
    db.ref("ball/pos1").set({
        "x":pos1.x+x,
        "y":pos1.y+y
    })
}

function readPosition(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;

}

function readPosition1(data){
    pos1=data.val();
    ball2.x=pos1.x;
    ball2.y=pos1.y;

}
function showError(){
    console.log("errormsg");
    
}
