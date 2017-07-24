
var ClozeCard = function(text, cloze) {
  //check to make sure text contains the 'cloze' word or phrase so that this can generate a valid card.
  if (text.indexOf(cloze) !== -1){
  
    //if constructor was called with the "new" keyword
    if (this instanceof ClozeCard) {
      
      this.cloze = cloze;
      //create the partial text string by removing the cloze portion of the text
      this.partial = "..."+ (text.slice(cloze.length,text.length));
      this.fullText = text; 
    }   
    //handle case if constructor wasn't called with "new"
    else return new ClozeCard(text, cloze);
  
  }
  //if not a valid card, throw an error.
  else{
    console.log("ERROR! This is not a valid cloze card.");
  }
};

module.exports = ClozeCard;