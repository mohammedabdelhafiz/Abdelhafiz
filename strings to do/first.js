function removeWhitespace(str) {
  return str.replace(/\s/g, '');
}


x = removeWhitespace("hello world my name is john")
console.log(x)


function getDigits(str) {
  var digits = "";
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      digits += str[i];
    }
  }
  return Number(digits);
}


function getAcronym(str) {
  var words = str.split(" ");
  var acronym = "";
  for(var i = 0; i < words.length; i++) {
      acronym += words[i][0].toUpperCase();
  }
  return acronym;
}