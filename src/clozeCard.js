
var ClozeCard = function(text, cloze) {
  //if constructor was called with the "new" keyword
  if (this instanceof ClozeCard) {
    this.cloze = cloze;
    //create the partial text string by removing the cloze portion of the text
    this.partial = "..."+ (text.slice(cloze.length,text.length));
    this.fullText = text;
  }
  //handle case if constructor wasn't called with "new"
  else return new ClozeCard(text, cloze);

};

module.exports = ClozeCard;