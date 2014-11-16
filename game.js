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
}

function interpret ( input ) {
	var trimmedInput = input.toLowerCase.trim;
	var splitInput = trimmed.Input.split(' ');
	var action = splitInput[0];
	splitInput.remove(0);
	var inventory = '';
	for(i = 1; i < splitInput.length; i++){
		inventory = inventory + splitInput[i] + ' ';
	}
	return inventory;
}

function execute ( inventory ){
	var action = inventory[0];
	
}

function report () {
	for (i=0; i < player.items.length; i++){
		var inventoryHTML = querySelector('ul');
		inventoryHTML += player.items[1];
	}
}

var gameStart = function(){
	var inputBox = document.querySelector('input');
	inputBox.addEventListener('keyup', function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

window.onload = gameStart;
