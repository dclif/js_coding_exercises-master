function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num)
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word, ind) => ind > 0 ? word[0].toUpperCase() + word.slice(1) : word).join('')
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((a,b) => a + b.subjects.length, 0)
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.filter(meal => meal.ingredients.includes(ingredient)).length > 0
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return [...new Set(arr1)].filter(el => arr2.includes(el)).sort((a,b) => a - b);

}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
