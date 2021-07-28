var ball,ball2;
var db,pos,pos1;
var imp;
function setup(){
    createCanvas(500,500);
    db=firebase.database();
    inp=prompt("1 or 2");
    ball = createSprite(250,250,10,10);
    ball2 = createSprite(250,250,10,10);
    var ballpos=db.ref('ball/pos');
    ballpos.on('value',readPosition);
    var ballpos2=db.ref('ball/pos1');
    ballpos2.on('value',readPosition1);
}

function draw(){
    background("white");
    if(inp==1){
        ball.shapeColor="red"
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
    }
    if(inp==2){
        ball2.shapeColor="lime"
        if(keyDown(LEFT_ARROW)){
            changePosition1(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition1(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition1(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition1(0,+1);
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
