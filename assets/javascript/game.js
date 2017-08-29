
					// User charAt() method to isloate individual letters in an array
					// indexOf() method shows the first time a letter appears in a word

					//question:Is there a value you could place in charAt that spans entire word?




// 1.Create a bank of words with a common theme. (an array)

// 2.User clicks any key to begin.

// 3.computer randomly generates a word 

// 4. computer obscures letters of word with dashes.

// 4. user guesses a letter

// if the letter is correct it replaces a dash and no guesses are deducted

// if the letter is wrong, the computer displays the wrong letter and the number of guesses a user has left.

// if the player loses an image of a hanged man appears and Chopin's death march plays. 

// if the player wins a new word is generated.  









// 1.Create a bank of words with a common theme. (an array)
var composers = ["mozart", "beethoven" ,"stravinsky"];
var name = encrypt();
var guesses=10;
var nameGenerate= composers[Math.floor(Math.random()*composers.length)];


//  computer obscures letters of word with dashes.
	

	function encrypt(){
	for(var i=0; i<nameGenerate.length; i++){
		return nameGenerate.charAt(i)="-";




	};
 



// 1.User clicks any key to begin. -things in this function will happen once per round.
document.onkeyup=function(){

	// 2.computer randomly generates a word 

	encrypt();

}

	
	// things in this function will happen multiple times throughout a round of gameplay.
	function gamePlay(nameGenerate, userGuess){

	// 4. user guesses a letter	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userGuess); 

	//5. if the letter is correct it replaces a dash and no guesses are deducted

	for(var x=0; x<nameGenerate.length; x++){
		if( nameGenerate.charAt(x)==="userGuess"){
				nameGenerate = nameGenerate.replace(/userGuess/,nameGenerate(x));
		}else{
			guesses--;
			alert("Guesses: " - guesses);
		}

}

}
	



	

