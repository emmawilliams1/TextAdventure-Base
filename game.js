//Author: Emma Williams

var player = {
	name: name,
	health: health,
	items: [],
	pickup: function( item ){
			this.items.push( item );
		},
	drop: function( item ){
		var pos = this.items.indexOf( item );
		if (pos >= 0) {
			this.items.splice(pos, 1)
		}
	}
	var report = function (){
		for (i=0; i < player.item.length; i++){
			var inventoryHTML = querySelector('ul');
			return inventoryHTML += this.items[i];
		}
	}
}

function interpret ( input ) {
	var trimmedInput = input.toLowerCase().trim();
	var splitInput = trimmed.Input.split(' ');
	//var action = splitInput[0];
	//splitInput.remove(0);
	var inventory = '';
	for(i = 1; i < splitInput.length; i++){
		inventory.push(trimmedInput[i] + ' '); 
	};
	return inventory;
};

function execute ( inventory ){
	var action = inventory.splice(0,0);
	var object = inventory;
	var action = function(object){
	}
};

var report = function(inventory){
	var list = document.getElementById('inventoryList');
	for (var i = 0; i < inventory.length; i++) {
		var li = document.createElement('li')
		li.appendChild(document.createTextNode(inventory[i]));
		list.appendChild(li);
	};
};

var gameStep = function (){
	var cmd = interpret(input);
	var result = execute(cmd);
	report(result);
}

var gameStart = function(){
	var inputBox = document.querySelector('input');
	inputBox.addEventListener('keyup', function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
};

window.onload = gameStart;
