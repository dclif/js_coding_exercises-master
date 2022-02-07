function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let res = [];
  for(i = 0; i < nums.length; i++) {
    if( nums[i] < 1)
    res.push(nums[i]);
  }

  return res;
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let res = [];
  for(i = 0; i < names.length; i++){
    if(names[i][0] === "S"){
      res.push(names[i])
    }
  }

  return res;
}


function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let res = [];
  for(let i = 0; i < words.length; i++){
    if (words[i].slice(0, 3) === "to ") res.push(words[i])
  }
  return res;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let res = [];
  for(let i = 0; i < nums.length; i++){
    if(Number.isInteger(nums[i]))res.push(nums[i])
  }
  return res;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  let res = [];
  for(let i = 0; i < users.length; i++){
    res.push(users[i].data.city.displayName)
  }
  return res;
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let res = [];
  for(let i = 0; i < nums.length; i++){
      res.push(Math.round(Math.sqrt(nums[i])*100)/100)
  }
  return res;
}


function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let res = [];
  for(let i = 0; i < sentences.length; i++){
    if(sentences[i].split(' ').includes(str))res.push(sentences[i]);
  }

  return res;
}


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let res = [];
  let temp = Number.MIN_VALUE;
  for(let i = 0; i < triangles.length; i++){
    for(let j = 0; j < triangles.length; j++){
      if(triangles[i][j] > temp){
        temp = triangles[i][j];
      }
    }
    res.push(temp)
    temp = Number.MIN_VALUE;
  }

  return res;
}


module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
