class Player{
    constructor(){
       this.name = null;
       this.index = 0;
       this.rank = null;
       this.distance = 0;
    }

    getCount(){
        var PlayerCountref = database.ref('PlayerCount'); 
        PlayerCountref.on("value", function(data){
            playerCount = data.val();
        }) 
    }

    updateCount(count){
        database.ref('/').update({
            PlayerCount : count
        })
    }

   update(){
       var playerIndex = "players/player" + this.index;
       database.ref(playerIndex).set({
           name : this.name,
           distance : this.distance
       })
   }

   static getPlayerInfo(){
       var playerInfoRef = database.ref('players');
       playerInfoRef.on("value", (data)=>{
       allPlayers = data.val();
       });
   }

    getCarsAtEnd(){
       var carsAtEnd = database.ref('CarsAtEnd');
       carsAtEnd.on("value",(data)=>{
       this.rank = data.val();
       })
   }

  static updateCarsAtEnd(rank){
       database.ref('/').update({
           CarsAtEnd : rank
       })
   }
}