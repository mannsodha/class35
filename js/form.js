class Form{
    constructor(){
    

    }
    display(){
var title = createElement('h2')
title.html("Car Racing Game")
title.position(200,10)
var input = createinput("name")
input.position(200,160)
var button = createbutton("play")
button.position(200,250)
var greeting = createElement('h3')
button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playerCount += 1
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("welcome"+name)
    greeting.position(200,160)
});
}
}