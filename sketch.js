//Create variables here
var dog, happyDog;
var dogImg, happyDogImg;
var database;
var foodS, foodStock;

function preload()
{
	//load images here
	dogImg = loadImage("images/dogImg.png");
	happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	database = firebase.database();

	createCanvas(500, 500);
	dog = createSprite(450, 450, 50, 50);
	dog.addImage(dogImg);

	foodStock = database.ref('Food');
	foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);


  if (keyWentDown(UP_ARROW)) {
  	writeStock(foodS);
  	dog.addImage("happyDogImg");
  }
  drawSprites();
  //add styles here

  text()

}



