class Form {
    constructor (){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting=createElement("h3");
    }
    display(){
        var title=createElement('h2', 'Multiplayer Car RacingGame');
        title.position(110,0);
        
        this.input.position(130,160);
      
 this.button.position(250, 200);
  
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
      player.name = this.input.value();
      playerCount=playerCount+1;
      player.updateCount(playerCount);
      player.index = playerCount;
      player.update();
      this.greeting.html("hello"+player.name);
      this.greeting.position(130,160);
  })
  
    }
hide(){
    this.greeting.hide();
    
}
}