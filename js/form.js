class Form {
    constructor(){
       this.input = createInput("name");
       this.button = createButton("play");
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
       this.title.html("Car Racing Game");
       this.title.position(130,10);

       this.input.position(130,160);
       this.button.position(130,200);

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name = this.input.value();
           playerCount = playerCount + 1;
           player.index = playerCount;
           player.updateCount(playerCount);
           player.update();
           this.greeting.html("Hello!" + player.name);
           this.greeting.position(130,100);
       })
    }
}