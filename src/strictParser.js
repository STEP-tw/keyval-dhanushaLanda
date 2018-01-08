const Parser=require("./keyValueParser.js");
const strictParseInfoCreator=require("./parseInfoCreator.js").strict;

var StrictParser=function(listOfKeys,caseSensitive=true) {
  Parser.call(this);
  let sanitisedListOfKeys=listOfKeys||[];
  this.parseInfoCreator=strictParseInfoCreator(sanitisedListOfKeys,caseSensitive);
}
console.log(Parser.prototype);
StrictParser.prototype=Object.create(Parser.prototype);
module.exports=StrictParser;
