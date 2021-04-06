class Game{
  constructor(){

  }

  getState(){
    var gameStateref = database.ref('GameState');
    gameStateref.on("value",function(data){
        gameState = data.val();
    })
  }

  update(game){
     database.ref('/').update({
         GameState : game
     })
  }

  start(){
     if (gameState === 0){
         player = new Player();
         player.getCount();
         form = new Form();
         form.display();
     }

     car1 = createSprite(100,370);
     car2 = createSprite(200,370);
     car3 = createSprite(300,370);
     car4 = createSprite(400,370);

     car1.addImage("car1",car1img);
     car2.addImage("car2",car2img);
     car3.addImage("car3",car3img);
     car4.addImage("car4",car4img);

     cars = [car1, car2, car3, car4];

  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background("yellow");
      image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);

    var index = 0;
    var x = 175;
    var y;

    for(var i in allPlayers){
      index = index + 1;
      x = x + 200;
      y = displayHeight - allPlayers[i].distance;
      cars[index - 1].x = x;
      cars[index - 1].y = y;
    }
  }
    
  drawSprites();

  if(keyDown(UP_ARROW)&& player.index !== null){
     player.distance = player.distance + 10;
     player.update();
     console.log(player.distance);
  }
  }

  end(){

  }
}