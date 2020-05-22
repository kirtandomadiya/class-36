class Game {
    constructor (){
 }

 getState (){
     var getStateRef=database.ref("gameState");
     getStateRef.on("value",function(data){
         gameState=data.val();
     })
 }

 update(state){
     database.ref("/").update({
         gameState:state
     })
 }

 start(){
     if(gameState===0){
         form=new Form();
         form.display();
         player=new Player();
         player.getCount();

     }
 }
 play(){
     form.hide();
     textSize(15);
     text ("gameStart",120,100);
     Player.getPlayerInfo();
     if (allPlayers!==undefined){
         var display_position = 130;
         for (var plr in allPlayers){
         display_position +=20;
         text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);}
     }
if (keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance += 50;
    player.update();
}
 }
}