
var BasicCard = function(front, back) {
  //if constructor was called with the "new" keyword
  if (this instanceof BasicCard) {
    this.front = front;
    this.back = back;
  }
  //handle case if constructor wasn't called with "new"
  else return new BasicCard(front, back);

};

module.exports = BasicCard;