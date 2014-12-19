function startGame(){
	if ($('#character').val() == '') {
		$('p').empty().html('Please enter a character name');
	}
	else{
		console.log($('input:radio[name=advantage]:checked').val());
		name = $('#character').val() ;
		advantage = $('input:radio[name=advantage]:checked').val();
		window.location.href = "game.html?name=" + name + "&advantage=" + advantage;
	}
}

function quitGame(){
	window.location.href = 'end.html';
}
