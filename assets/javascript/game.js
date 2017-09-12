 	
	//global variables
 	var currentWord = ["zebra", "dog"];
    var wrongLetters= [];
    var numGuesses = 9;
    var winCounter=0;
    var lossCounter=0;
    //the variable animal randomly selects a word from the array currentWord.
    var animal=currentWord[Math.floor(Math.random() * currentWord.length)];
    //seperateLetters makes each letter in animal it's own array.
    var seperateLetters=animal.split("");
    
    
    
   //this for loop substitutes dashes for letters in randomly selected animal.
        
        for(var i=0; i<animal.length ; i++){
            animal =animal.replace(animal[i], "-");
        }

    

        
    
    


    //the function guess is called by the user's key click.
    //the User's gussed letter is stored in the variable userInput.
    document.onkeyup = function guess() {

            var userInput= String.fromCharCode(event.keyCode).toLowerCase();      

            console.log(userInput) 

            //this for loop loops through each letter in the randomly chosen animal.
            for(var x=0; x<seperateLetters.length ;x++){
                    //if the userInput === any of the letters in the randomly chosen animal an alert will pop up
                    //the userInput will replace the dash of the letter it matched with.
                     if(userInput===seperateLetters[x]){
                       alert("match");
                       animal= animal.replace("-", userInput);
                       interface();
                    } 

                    //if all of the dashes are replaced by letters, the animal word resets and wins++
                     if(animal===animal.replace("-", userInput)){
                        winCounter++;
                        generate();
                        interface();
                        
                     }


                }     
                    //if the userInput does not match the letters in the randomly chosen animal 
                    //push the userInput to the wrongLetters array.
                    //subtract the number of guesses the user has left.
                    //indexOf is not working because?
                    if(userInput===seperateLetters.indexOf(-1)){                
                            wrongLetters.push(userInput);
                            numGuesses--;
                           interface();
                        }   


             

           
    }

 
    function generate(){
            var animal=currentWord[Math.floor(Math.random() * currentWord.length)];
            var seperateLetters=animal.split("");

            for(var i=0; i<animal.length ; i++){
            animal =animal.replace(animal[i], "-");
        }
    }
    



        
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
        generate();
    }
	



	

