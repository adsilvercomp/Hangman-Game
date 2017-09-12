 	
	//global variables
 	var currentWord = ["zebra", "dog"];
    var wrongLetters = [];
    var numGuesses = 9;
    var winCounter;
    var lossCounter;
    var userInput;
    //the variable animal randomly selects a word from the array currentWord.
    var animal = currentWord[Math.floor(Math.random() * currentWord.length)];
    var seperateLetters= animal.split("");
    
    
    
   
    
    
    


    //the function guess is called by the user's key click.
    //the User's gussed letter is stored in the variable userInput.
    document.onkeyup = function guess() {

     userInput= String.fromCharCode(event.keyCode).toLowerCase();      

     console.log(userInput)  
   
    }

 
    //this function substitutes dashes for letters in randomly selected animal.
        for(var i=0; i<animal.length ; i++){
            animal =animal.replace(animal[i], "-");
        }
    
        //for loop ensure that the dashes take up length of animal name
    	
    



        
    //this function pushes user interface to the html file.
    function interface() {
        var html =  "<h1>  Hangman  </h1>" + 
                    "<h2> Guess the Animal </h2>" +
                     "<h1>" + animal + "</h1>" +
                    "<h2> Wrong Guesses: " + wrongLetters + "</h2>" +
                    "<h2> Guesses Left: " + numGuesses + "</h2>" +
                    "<h2> Wins: " + winCounter + "</h2>" +
                    "<h2> Losses: " + lossCounter + "</h2>";

        document.getElementById("game").innerHTML=html;
                    
    }


    //this function calls the the interface when the window loads.
    window.onload = function(){
        interface();
    }
	



	

