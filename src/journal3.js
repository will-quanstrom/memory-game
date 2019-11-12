export function Entry(title, body) {
  this.title = title,
  this.body = body
}

Entry.prototype.countWords = function() {
  let words = [];
  words = this.body.split(" ");
  return words.length;
}


Entry.prototype.countVowels = function() {
  var vowels = 0;
  var consonants = 0;
  for (var i = 0; i < this.body.length; i++) {
    if(this.body.charAt(i) == 'a' || this.body.charAt(i) == 'e' || this.body.charAt(i) == 'i' || this.body.charAt(i) == 'o' || this.body.charAt(i) == 'u' || this.body.charAt(i) == 'A' || this.body.charAt(i) == 'E' || this.body.charAt(i) == 'I' || this.body.charAt(i) == 'O' || this.body.charAt(i) == 'U') {
         vowels++;
   }
   var letters = this.body.replace(/ /g, "");
    consonants = letters.length - vowels;
  }
  return "Your post has " + vowels + " vowels and " + consonants + " consonants.";
}

Entry.prototype.getTeaser = function() {
  let i;
  let sentences = [];
  let teaser = [];
  sentences = this.body.split(".");
  let numWords = [];
  numWords = sentences[0].split(" ");
  if(numWords.length >= 8){
    for(i = 0; i < 8; i++){
      teaser.push(numWords[i]);
    }
    return teaser.join(" ");
  } else {
  return (sentences[0]);
}
}
