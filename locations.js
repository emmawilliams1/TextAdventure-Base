var locations = [];

var run = function(){
	for(var i = 0; i < 9; i++) {
		locations.push(new Array());
		for (var j = 0; j < 9; j++) {
			locations[i].push(Math.floor(Math.random() * 10) + 1);
		}
	}
	var line;
	for(var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if(locations[0][i] === 10){
				console.log('You have walked into a gorilla nest. What would you like to do?')
			}
			else if(locations[i][j] <= 3){
				console.log('You enter an empty clearing. What would you like to do?')
			}
			else if(locations[i][j] === 4){
				console.log('You see berries. What would you like to do?')
			}
			else if(locations[i][j] === 5){
				console.log('You see a panther in a tree directly in front of you. It appears to have noticed you. What would you like to do?')
			}
			else if(locations[i][j] === 6){
				console.log('You see a stream to your left. You are very thirsty. What would you like to do?')
			}
			else if(locations[i][j] === 7){
				console.log('A gorilla baby is playing in the grass. What would you like to do?')
			}
			else if(locations[i][j] === 8){
				console.log('A panther baby is playing in the grass. What would you like to do?')
			}
			else if(locations[i][j] === 9){
				console.log('There are dry sticks in front of you that could be used to make a fire. What would you like to do?')
			}
		}
	}
	console.log(locations[0][0]);
}

var row = 4; var col = 5;
var startLocation = [4][5];
		
// var map = {
//   location: locationRow,
//   connection: locationCol,
// }
  
window.onload = function(){
  console.log('In locations.js');
