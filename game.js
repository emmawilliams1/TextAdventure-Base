var player = function(name){
   var Player ={
    name: name,
    items: [[], []],
    advantage: None
   };
   Player.pickup = function(item){
     this.items.push(item);
   };
   Player.drop = function(){
    this.items.pop();
   }
   Player.getName = function(){
    
   }
};
 
var interpret = function(input){
    var str = input.toLowerCase().trim();
    var res = str.split(" ");
    var inventory = [];
    for(i = 1; i < res.length; i++){
      inventory.push(res[i] + ' ');
    };
    return inventory;
};
 
var execute = function(inventory){
    var action = inventory.splice(0,0);
    var object = inventory;
    //player[action](object);
    var action = function(object){
    };
};  
 
var report = function(inventory){
    var list = document.getElementById('inventoryList');
    for (var i = 0; i < inventory.length; i++){
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(inventory[i]));
      list.appendChild(li);
    }
};

var gameStep = function(){
    if(event.keyCode === 38){
      console.log('Moved Up');
        player.setY(player.getY() - 1);
   }
    else if(event.keyCode === 40){
        console.log('Moved Down');
        player.setY(player.getY() + 1);
   }
   else if(event.keyCode === 37){
        console.log('Moved Left');
        player.setX(player.getX() + 1);
   }
   else if(event.keyCode === 39){
      console.log('Moved Right');
        player.setX(player.getX() - 1);
   }
}
