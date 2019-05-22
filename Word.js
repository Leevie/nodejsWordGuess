var Letter = require("./Letter");

var Word = function(string){
    this.wordVar = string.split("").map(function(char){  //.split() turns string to array, .map performs some function on every element and gives a new array
        return new Letter(char)
    })
    
    this.displayWord = function() {
        var displayString = "";

        for (i = 0; i < this.wordVar.length; i++){
            displayString += this.wordVar[i].getLetterToDisplay()
        }

        return displayString;


    }   
}


module.exports = Word;