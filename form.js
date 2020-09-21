class Form {
    constructor(){
      this.title = createElement("h2");

      this.inPut = createInput("Enter Name");

      this.button = createButton("Play");

      this.greeting = createElement("h5")
    }

    hide(){
      this.title.hide();
      this.inPut.hide();
      this.button.hide();
      this.greeting.hide();
    }

    display(){
      
        this.title.html("CarMultiplayerRacingGame");
        this.title.position(displayWidth/2 - 50, 0);
        
        this.inPut.position(displayWidth/2 - 40, displayHeight/2 - 80);
      
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(()=>{
          
          this.inPut.hide();
          this.button.hide();
          
          player.name = this.inPut.value();
          playerCount+= 1;
          player.update();
          player.updateCount(playerCount);

          this.greeting.html("Hello" + player.name);
          this.greeting.position(displayWidth/2 - 50, displayHeight/4);

        })
    }
}