// Spread Syntax Bonus activity

function printColours(colours){
    if (!colours) throw new Error("colour is required");
    // Your solution using the spread operator here!
    return [...colours]
}

function shoppingList(list, newItem){
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    [...list, newItem] 
    // Your solution using the spread operator here!
    return [...list, ...newItem]
}


function highestNumber(numbers){
    if (!numbers) throw new Error("numbers are required");
    // Your solution using the spread operator here!
    return numbers.sort((a,b) => b-a)[0]

}


function splitThatString(string){
    if (!string) throw new Error("string is required");
    // Your solution using the spread operator here!
    return [...string]
}


// Optional Chaining Bonus activity!

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    // Your solution using optional chaining here!
    return Object.prototype.hasOwnProperty.call(user, "address") ? user.address.postcode : undefined;
    
}




module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};