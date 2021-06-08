var gameState = 0;
var background, backgroundImg;
var level1bg, level1bgImg;
var start, startImg;
var story, storyImg;
var play, playImg;
var home, homeImg;
var infoSlide, infoSlideImg;
var m1, m2, m3, m4;

function preload(){
backgroundImg = loadImage("images/background.png");
level1bgImg = loadImage("images/level1_bg.jpg");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
playImg = loadImage("images/play.png");
homeImg = loadImage("images/home.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level1.png");
m1 = loadImage("images/skeleton_right.png");
m2 = loadImage("images/slappy_front.png");
m3 = loadImage("images/witch_left.png");
m4 = loadImage("images/zombie_right.png");
sound1 = loadSound("sounds/halloween_sound1.mp3");
sound2 = loadSound("sounds/level1_sound2.mp3");

}

function setup() {
createCanvas(1000,600);
sound1.play();
homeButton = createSprite(750,60);
homeButton.addImage(homeImg);
homeButton.scale = 0.5;
homeButton.visible = false;

startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;

storyButton = createSprite(100,250);
storyButton.addImage(storyImg);
storyButton.scale = 0.5;

playButton = createSprite(750,150);
playButton.addImage(playImg);
playButton.scale = 0.4;
playButton.visible = false;



}

function draw() {
if(backgroundImg)
background(backgroundImg);  

if(mousePressedOver(startButton)){
backgroundImg = null;
startButton.visible = false;
storyButton.visible = false;
homeButton.visible = true;
playButton.visible = true;
background(level1Img);

if(mousePressedOver(playButton)){
backgroundImg = null;
startButton.visible = false;
storyButton.visible = false;
background(level1bgImg);
var monster1 = createSprite(100,250,50,50);
monster1.addImage(m1);
    
var monster2 = createSprite(200,350,50,50);
monster2.addImage(m2);
    
var monster3 = createSprite(300,450,50,50);
monster3.addImage(m3);
    
var monster4 = createSprite(300,550,50,50);
monster4.addImage(m4);
}
}

if(mousePressedOver(storyButton)){
backgroundImg = null;
startButton.visible = false;
storyButton.visible = false;
playButton.visible = false;
homeButton.visible = true;
background(infoSlideImg);
}

if(mousePressedOver(homeButton)){
//backgroundImg = null;

background(backgroundImg);
startButton.visible = true;
storyButton.visible = true;
}




    
drawSprites();
}