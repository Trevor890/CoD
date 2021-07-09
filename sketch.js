var bg;
var roach;
var enemy1,sniper,enemy3;

function preload(){
    bg=loadImage("bg1.jpg");
    roach=loadImage("scar.png");
    enemy1=loadImage("enemy1.png");
    sniper=loadImage("enemy3.png");
    enemy3=loadImage("enemy2.png");
}

function setup(){
    createCanvas(displayWidth*5/6,displayHeight*5/6);
    roach_s=createSprite(displayWidth*5/12,displayHeight*(5/6)-60);
    roach_s.addImage("roach",roach);
    enemy1_s=createSprite(displayWidth*5/9,displayHeight*5/9);
    enemy1_s.addImage("e1",enemy1);
    enemy1_s.scale=0.15;
    sniper_s=createSprite(displayWidth*2/3+60,displayHeight*5/9-60);
    sniper_s.addImage("e2",sniper);
    sniper_s.scale=0.125;
    enemy3_s=createSprite(displayWidth*1/4-30,displayHeight*5/9+30);
    enemy3_s.addImage("e3",enemy3);
    enemy3_s.scale=0.2
}

function draw(){
    background(bg);
    drawSprites();
}