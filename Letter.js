var Letter = function(char){
    this.letterVar = char;
    this.boolChar = false;   // a form of "state"
    this.getLetterToDisplay = function(){
        if (this.boolChar === true){
            return this.letterVar;
        } else {
            return "_";
        }
    }
    
}


module.exports = Letter;