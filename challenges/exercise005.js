const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return (nums.indexOf(n) >= 0 && nums.indexOf(n) < nums.length-1) ? nums[nums.indexOf(n)+1] : null
};



const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {1: 0, 0: 0};
  [...str].forEach(num => num === "1" ? obj[1]++ : obj[0]++)
  return obj;
};


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return +[...n.toString()].reverse().join('')
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a,b) => a + b)
};


const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.length < 2 ? arr : [arr[arr.length - 1],...arr.slice(1, arr[arr.length -2]),arr[0]]
};


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).filter(el => typeof el === "string" && el.toUpperCase().includes(searchTerm.toUpperCase())).length > 0
};



const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {};
  str.toLowerCase().replace(/[^\w\s]|_/g, "").split(' ').forEach(word => obj[word] ? obj[word] = obj[word] + 1: obj[word] = 1)
  return obj
};



module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
