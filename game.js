class Game {
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",  (data)=> {
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState : state
        });       
    }
    start(){
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }

        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        cars = [car1, car2, car3, car4];
    }
    play(){
        
        form.hide();
        textSize(30);
        text("GameStart", 200, 100);
        Player.getPlayerInfo();
        
        if (allPlayers !== undefined) {
            
          var displayPosition = 150;

          for(var plr in allPlayers){
              if (plr === "player" + player.index) {
                  fill("red");
              } else {
                  fill("black");
              }

              displayPosition+= 20;
              textSize(15)
              text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 200, displayPosition)
          }
        }
        if (keyDown(UP_ARROW) && player.index !== null) {
            player.distance+= 20;
            player.update();
        }


    }
}