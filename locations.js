var locations = [];
var player;

window.onload = function(){
	run();
}

var Player = function(name, advantage){
	this.name = name
	this.water = 50
	this.hunger = 50
	this.items = []
	this.advantage = advantage
	this.xLocation = 4
	this.yLocation = 5
	this.health = 50
	this.pickup = function(item){
		this.items.push(item, 1);
	};
	this.drop = function(){
		this.items.pop();
	}
	this.getName = function(){
		return this.name;
	}
	this.getAdvantage = function(){
		return this.advantage;
	}
	this.getWater = function(){
		return this.water;
	}
	this.setWater = function(num){
		if (this.water + num >= 100) {
			this.water = 100;
		}
		else if(this.water + num <= 0){
			this.water = 0;
		}
		else{
			this.water += num;
		}
	}
	this.getHunger = function(){
		return this.hunger;
	}
	this.setHunger = function(num){
		if (this.hunger + num >= 100) {
			this.hunger = 100;
		}
		else if(this.hunger + num <= 0){
			this.hunger = 0;
		}
		else{
			this.hunger += num;
		}
	}
	this.setX = function(num){
		if(this.xLocation == 0 && num != 1){
			this.xLocation = 0;
		}
		else if(this.xLocation == 8 && num != -1){
			this.xLocation = 8
		}
		else{
			this.xLocation += num;
		}
	}
	this.getHealth = function(){
		return this.health
	}
	this.setHealth = function(num){
		if (this.health + num >= 100) {
			this.health = 100;
		}
		else if(this.health + num <= 0){
			this.health = 0;
		}
		else{
			this.health += num;
		}
	}
	this.getX = function(){
		return this.xLocation;
	}
	this.setY = function(num){
		// debugger;
		if(this.yLocation == 0 && num != 1){
			this.yLocation = 0;
		}
		else if(this.yLocation == 8 && num != -1){
			this.yLocation = 8
		}
		else{
			this.yLocation += num;
		}
	}
	this.getY = function(){
		return this.yLocation;
	}
	this.getPlayer = function(){
		return this;
	}
	this.determineAdvan = function(){
		var n = document.URL.split('?');
		var m = n[1].split('&')
		// var o = m.split('=');
		if (m[1].split('=')[1] == 'none') {
			console.log('None');
		}
		else if (m[1].split('=')[1] == 'noHunger') {
			this.hunger = 0;
		}
		else if (m[1].split('=')[1] == 'fullWater') {
			this.water = 100;
		}
		else if(m[1].split('=')[1] == 'sticks'){
			this.items.push("Sticks")
			report(this.items);
		}
		else if(m[1].split('=')[1] == 'tranquilizer') {
			this.items.push('Tranquilizer')
			report(this.items);
		}
	}
}

var run = function(){
	for(var i = 0; i < 9; i++) {
		locations.push(new Array());
		for (var j = 0; j < 9; j++) {
			locations[i].push(Math.floor(Math.random() * 10) + 1);
		}
	}
	locations[0][0] = 11;
	start();
}

function start(){
	$('#bodyContent').empty().html("<h3 style='text-align: center;'>Stuck in a Jungle. Move a location</h3>")
	player = new Player(document.URL.split('?')[1].split('&')[0].split('=')[1], document.URL.split('?')[1].split('&')[1].split('=')[1]);
	player.determineAdvan();
	checkPlayer();
}

window.onkeyup = function() {
	gameStep();
}

var gameStep = function(){
	if(event.keyCode === 38){
		// $('#bodyContent').append("<p style='text-align: center'>Moved Up</p>");
		player.setY(-1);
		console.log(player.getX() + ", " + player.getY())
	}
	else if(event.keyCode === 40){
		// $('#bodyContent').append("<p style='text-align: center'>Moved Up</p>");
		player.setY(1);
		console.log(player.getX() + ", " + player.getY())
	}
	else if(event.keyCode === 37){
		// $('#bodyContent').append("<p style='text-align: center'>Moved Up</p>");
		player.setX(-1);
		console.log(player.getX() + ", " + player.getY())
	}
	else if(event.keyCode === 39){
		// $('#bodyContent').append("<p style='text-align: center'>Moved Up</p>");
		player.setX(1);
		console.log(player.getX() + ", " + player.getY())
	}
	else if(event.keyCode == 73){
		report(player.items)
		return;
	}
	jungleEvent();
}

function jungleEvent(){
	if(locations[player.getX()][player.getY()] === 10){
		gorillaNest();
	}
	else if(locations[player.getX()][player.getY()] <= 3){
		emptyClearing();
	}
	else if(locations[player.getX()][player.getY()] === 4){
		berries()
	}
	else if(locations[player.getX()][player.getY()] === 5){
		panther()
	}
	else if(locations[player.getX()][player.getY()] === 6){
		stream()
	}
	else if(locations[player.getX()][player.getY()] === 7){
		gorillaBaby()
	}
	else if(locations[player.getX()][player.getY()] === 8){
		pantherBaby()
	}
	else if(locations[player.getX()][player.getY()] === 9){
		drySticks()
	}
	else if(locations[player.getX()][player.getY()] == 11){
		window.location.href = "win.html";
	}
}

function gorillaNest(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ("<h3 style='text-align: center'>You have walked into a gorilla nest. What would you like to do?</h3><p style='text-align: center'>1 - Kill a gorilla for food<br>2 - Run<br>3 - Drink Water<br>4 - Drop Item</p>");
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3 || choice == 4){
			break;
		}
	}
	if (choice == 1) {
		tryKillG();
	}
	else if(choice == 3){
		drinkWaterG()
	}
	else if(choice == 4){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		$('#bodyContent').append("<p style='text-align: center'>You got away safely!<p>");
		player.setHunger(5);
		checkPlayer()
	}

}

function emptyClearing(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">You enter an empty clearing. What would you like to do?</h3><p style="text-align: center">1 - Drink Water<br>2 - Drop Item<br>3 - Do Nothing</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3){
			break;
		}
	}
	if (choice == 1) {
		drinkWater();
	}
	else if(choice == 2){
		player.setHunger(5)
		checkPlayer()
	}
	else{
		player.drop()
		player.setHunger(5)
		checkPlayer()
	}

}

function berries(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">You see berries. What would you like to do?</h3><p style="text-align: center">1 - Pick Up and Eat<br>2 - Pick Up<br>3 - Drink Water<br>4 - Drop Item</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3 || choice == 4){
			break;
		}
	}
	if (choice == 1) {
		eat();
	}
	else if(choice == 2){
		player.pickup("Berries")
		player.setHunger(5)
		checkPlayer()
	}
	else if(choice == 4){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		drinkWater();
	}
}

function panther(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">You see a panther in a tree directly in front of you. It appears to have noticed you. What would you like to do?</h3><p style="text-align: center">1 - Kill a panther for food<br>2 - Run<br>3 - Drink Water<br>4 - Drop Item</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3 || choice == 4){
			break;
		}
	}
	if (choice == 1) {
		tryKillP();
	}
	else if(choice == 3){
		drinkWaterP()
	}
	else if(choice == 4){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		$('#bodyContent').append("<p style='text-align: center'>You got away safely!</p>");
		player.setHunger(5);
		checkPlayer()
	}
}

function stream(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">You see a stream to your left. You are very thirsty. What would you like to do?</h3><p style="text-align: center">1 - Fill Water and Drink<br>2 - Drop Item<br>3 - Do Nothing</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3){
			break;
		}
	}
	if (choice == 1) {
		player.setWater(100);
		player.setHunger(5)
		checkPlayer()
	}
	else if (choice == 2){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		player.setHunger(5)
		checkPlayer()
	}
}

function gorillaBaby(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">A gorilla baby is playing in the grass. What would you like to do?</h3><p style="text-align: center">1 - Kill a gorilla for food<br>2 - Run<br>3 - Drink Water<br>4 - Drop Item</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3 || choice == 4){
			break;
		}
	}
	if (choice == 1) {
		tryKillG();
	}
	else if(choice == 3){
		drinkWaterG()
	}
	else if(choice == 4){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		$('#bodyContent').append("<p style='text-align: center'>You got away safely!</p>");
		player.setHunger(5)
		checkPlayer()
	}
}

function pantherBaby(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">A panther baby is playing in the grass. What would you like to do?</h3><p style="text-align: center">1 - Kill the panther for food<br>2 - Run<br>3 - Drink Water<br>4 - Drop Item</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3 || choice == 4){
			break;
		}
	}
	if (choice == 1) {
		tryKillP();
	}
	else if(choice == 3){
		drinkWaterP()
	}
	else if(choice == 4){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		$('#bodyContent').append("<p style='text-align: center'>You got away safely!</p>");
		player.setHunger(5)
		checkPlayer()
	}
}

function drySticks(){
	$('#bodyContent').empty()
	document.getElementById('bodyContent').innerHTML = ('<h3 style="text-align: center">There are dry sticks in front of you that could be used to make a fire. What would you like to do?</h3><p style="text-align: center">1 - Make Fire<br>2 - Pick Up<br>3 - Drink Water<br>4 - Drop Item</p>')
	while(true){
		var choice = prompt('Enter a number:')
		if(choice == 1 || choice == 2 || choice == 3 || choice == 4){
			break;
		}
	}
	if (choice == 1) {
		makeFire();
	}
	else if(choice == 3){
		player.pickup("Sticks")
		player.setHunger(5)
		checkPlayer()
	}
	else if(choice == 4){
		player.drop();
		player.setHunger(5)
		checkPlayer()
	}
	else{
		drinkWater();
	}
}

function tryKillG(){
	if (Math.floor(Math.random() * 100) < 50) {
		$('#bodyContent').append('<p style="text-align: center">Successful Kill</p>')
		player.setHunger(-45);
	}
	else{
		$('#bodyContent').append('<p style="text-align: center">You were attacked by multiple gorillas</p>')
		player.setHealth(-15);
	}
	player.setHunger(5)
	checkPlayer()
}

function tryKillP(){
	if (Math.floor(Math.random() * 100) < 50) {
		$('#bodyContent').append('<p style="text-align: center">Successful Kill</p>')
		player.setHunger(-45);
	}
	else{
		$('#bodyContent').append('<p style="text-align: center">You were attacked by multiple panthers</p>')
		player.setHealth(-15);
	}
	player.setHunger(5)
	checkPlayer()
}

function drinkWater(){
	if (player.getWater() == 0) {
		$('#bodyContent').append('<p style="text-align: center">No Water</p>')
		checkPlayer();
		return;
	}
	player.setWater(-15);
	player.setHunger(-5);
	checkPlayer()
}

function drinkWaterG(){
	if (player.getWater() == 0) {
		$('#bodyContent').append('No Water')
		checkPlayer();
	}
	else if(Math.floor(Math.random() * 100) < 50){
		$('#bodyContent').append('<p style="text-align: center">You were attacked while trying to drink water</p>');
		player.setHealth(-10);
		player.setWater(-15);
		player.setHunger(-5);
		checkPlayer()
	}
	else{
		player.setWater(-15);
		player.setHunger(-5);
		checkPlayer()
	}
}

function drinkWaterP(){
	if (player.getWater() == 0) {
		$('#bodyContent').append('No Water')
		checkPlayer();
	}
	else if(Math.floor(Math.random() * 100) < 50){
		$('#bodyContent').append('<p style="text-align: center">You were attacked while trying to drink water</p>');
		player.setHealth(-10);
		player.setWater(-15);
		player.setHunger(-5);
		checkPlayer()
	}
	else{
		player.setWater(-15);
		player.setHunger(-5);
		checkPlayer()
	}
}

function makeFire(){
	$('#bodyContent').append("<p style='text-align: center'>You're nice and warm. Gained some health</p>")
	player.setHealth(15)
	checkPlayer()
}

function eat(){
	player.setHunger(-25);
	player.setHealth(10);
	checkPlayer()
}

function checkPlayer(){
	if (player.getHunger() > 60) {
		player.setHealth(-5);
	}
	else if(player.getHunger() > 80){
		player.setHealth(-10)
	}
	if (player.getHealth() == 0) {
		$('#bodyContent').empty().html("<p style='font-size: 350%; text-align: center'>You have died</p>")
		setTimeout(function(){
			window.location.href = "end.html"
		}, 3000);
	};
	$('#hunger').empty()
	document.getElementById('hunger').innerHTML = 'Hunger: ' + player.getHunger()
	$('#health').empty()
	document.getElementById('health').innerHTML = 'Health: ' + player.getHealth()
	$('#Water').empty()
	document.getElementById('water').innerHTML = 'Water: ' + player.getWater()
}

var report = function(inventory){
	$('#inventoryList').empty();
	for (var i = 0; i < inventory.length; i++){
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(inventory[i]));
		$('#inventoryList').append(li);
	}
}
