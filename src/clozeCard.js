
var ClozeCard = function(text, cloze) {

  this.cloze = cloze;
  this.partial = "..."+ (text - cloze);
  this.fullText = text;

};

module.exports = ClozeCard;