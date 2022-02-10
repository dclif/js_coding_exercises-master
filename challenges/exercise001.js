function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
    
return [...word].map((el, ind) => ind === 0 ? el.toUpperCase() : el).join('')
    
}


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase()
}



function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round((((vatRate / 100) * originalPrice ) + originalPrice)*100) / 100
  
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round((originalPrice - (reduction / 100 * originalPrice))*100) / 100
}



function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length % 2 === 0) return str.slice(Math.floor(str.length / 2) - 1, Math.floor(str.length / 2) + 1)
  return str[Math.floor(str.length / 2)]
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('')
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split('').reverse().join(''))
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.map(user => user.type === "Linux").filter(os => os === true).length
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return Math.round((scores.reduce((a,b) => a + b) / scores.length)*100) / 100
}


function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n % 15 === 0)return "fizzbuzz"
  if(n % 3 === 0)return "fizz"
  if(n % 5 === 0)return "buzz"
  return n;
}



module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
