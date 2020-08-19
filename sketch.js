var fixedRect, movingRect, gameObject1, gameObject2, A, B;

function setup() {
  createCanvas(1000, 800);

  fixedRect = createSprite(500, 400, 80, 50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(600, 400, 50, 50);
  movingRect.shapeColor = "blue";

  gameObject1 = createSprite(200, 200, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(400, 600, 80, 50);
  gameObject2.shapeColor = "green";

  A = createSprite(700, 500, 30, 30);
  A.shapeColor = "purple";
  A.velocityX = -5;

  B = createSprite(500, 500, 50, 30);
  B.shapeColor = "purple";
  B.velocityX = 5;

}

function draw() {
  background(0, 0, 0);
  gameObject2.y = mouseY;
  gameObject2.x = mouseX;

  if (isTouching(gameObject2, gameObject1)) {
    text("You Rock", 100, 100);

    gameObject1.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  } else {
    gameObject1.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }

  bounceOff(A, B);
  drawSprites();
}