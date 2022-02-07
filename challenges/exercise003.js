function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x * x)
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((x, ind) => ind > 0 ? x[0].toUpperCase() + x.slice(1) : x).join('')
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((a,b) => a + b.subjects.length, 0)
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.filter(x => x.ingredients.includes(ingredient)).length > 0
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return arr1.filter(x => arr2.includes(x));

}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
