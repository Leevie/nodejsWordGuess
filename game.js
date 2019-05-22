var inquirer = require("inquirer");

function myFunction() {

    
        var myWords = ["Ironman","Tony Stark","The Hulk","Bruce Banner","Steve Rogers","Captain America","Spiderman","Peter Parker"];
    
        // Maybe use the random from Rock,Paper,Scissors assignment to choose a word.
        // Will need to use .indexOf maybe to compare input letter to one in the string?  Maybe word should be an array? 
       // var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        var casedGuessMeWord = myWords[Math.floor(Math.random() * myWords.length)];  // Real word, in it's original case, to be used to reveal at the end.
    
        // Word to be guessed in lowercase
        var guessMeWord  = casedGuessMeWord.toLowerCase();
    
        //Ah.. dashes get stored in an Array insted of written to the page.  Makes sense (thanks, Google!)
        var guessAry = []; 
    
        // Loop to create those dashes
        for(var i = 0; i < guessMeWord.length; i++) {
          guessAry[i] = "_";
        }

        var usersGuess = [];
    
        // Letters left over  -- may changed this to number of tries
        var lettersLeftOver = guessMeWord.length;
        
        
        console.log(guessMeWord);
        
        var countVar = lettersLeftOver;
        var i = 0;
        // This runs the game until all letters are guessed.
        var recurseFunc = function() {
        if (i < lettersLeftOver) {
          console.log("letters left over: " + countVar);
          countVar--;
          
          ///// Alert progress of the game from the array with dashes - will fill in as correct letters are guessed.
          // console.log("Please guess the following word:  " + guessAry.join(" "));
          //var elmtwordToGuess = document.getElementById("wordToGuess");
          //elmtwordToGuess.innerHTML = ("Please guess the following word:  " + guessAry.join(" "));

        
          inquirer
            .prompt([
              {
                type: "input",
                message: guessAry.join(" "),
                message: guessAry.join(" ") + "\r\n" + "Please guess a letter: ",
                name: "letter"
              }
          ])
          .then(function(inquirerResponse) {
                      ///// This works, but need to replace this with 'onkeyup' function
          // var guessVar = event.key;   //Can't get to work.
          var guessVar = inquirerResponse.letter;  //works`
          usersGuess.push(guessVar);
          console.log("Guessed Letters: " + usersGuess);
    
    
            // For loop for guessing letters
            for(var j = 0; j < guessMeWord.length; j++) {
              if(guessVar === guessMeWord[j]) {
                guessAry[j] = guessVar;
                // console.log("this guessAry: " + guessAry.join("") + "     this guessMeWord: " + guessMeWord);
              };
              if(guessAry.join("") === guessMeWord){
                i = lettersLeftOver;  // replace with END function
                j = (guessMeWord.length + 1);
                console.log("YOU WIN!!");
              } if(countVar === 0) {
                j = (guessMeWord.length + 1);
                console.log("YOU LOSE!!");
              }
            };
            i++;
            recurseFunc();
          })
    

          } // End of While
        }
        recurseFunc();
}

myFunction();