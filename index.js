function xcats () {
    return ["Milo", "Otis", "Garfield"];
}
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName) {
    // appends a cat to the end of the cats array:
    cats.push(catName);
}

function destructivelyPrependCat(catName) {
    // prepends a cat to the beginning of the cats array:
    cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
    // removes the last cat from the cats array:
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    // removes the first cat from the cats array:
    return cats.shift();
}

function appendCat(name) {
    // appends a cat to the cats array and returns a new array, leaving the cats array unchanged:
    return [...cats, name];
}

function prependCat(name) {
    // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged:
    return [name].concat(cats);
    //return [name, ...cats]
}

function removeLastCat() {
    // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged:
    return cats.slice(0, -1);
}
function removeFirstCat() {
    // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
    return cats.slice(1);
}
     /*
  8) index.js
       Array functions
     ReferenceError: removeFirstCat is not defined

*/