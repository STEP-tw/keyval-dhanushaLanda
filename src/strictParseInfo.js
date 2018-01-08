const Parsed=require("./parsed.js");
const ParseInfo=require("./parseInfo.js");
const InvalidKeyError=require("./errors/invalidKeyError.js");

const contains=function(list,key) {
  return list.find(function(validKey){
    return key==validKey;
  });
}
var convertToLowerCase = function(key){
  return key.toLowerCase();
}
var StrictParseInfo=function(initialParsingFunction,validKeys,caseSensitive) {
  this.caseSensitive = caseSensitive;
  ParseInfo.call(this,initialParsingFunction);
  this.validKeys=validKeys;
}

StrictParseInfo.prototype=Object.create(ParseInfo.prototype);

StrictParseInfo.prototype.pushKeyValuePair=function() {

  if(this.caseSensitive){
    if(!contains(this.validKeys,this.currentKey))
    throw new InvalidKeyError("invalid key",this.currentKey,this.currentPos);
  }
  this.parsedKeys[this.currentKey]=this.currentValue;
  this.resetKeysAndValues();
}

module.exports=StrictParseInfo;
