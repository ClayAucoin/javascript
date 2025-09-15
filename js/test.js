let fruits = [
    "apple",
    "orange",
    "banana",
    "coconut"
]

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(`index of 'apple': ${index}`);


// printing array in order
for(let i = 0; i < fruits.length; i++){
    console.log(`for loop, index ${i}: ${fruits[i]}`);
}

// printing array in reverse order
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(`reverse order, index ${i}: ${fruits[i]}`);
}

// fruits.sort();
// fruits.sort().reverse();

// enhanced for loop
for(let fruit of fruits){
    console.log(`enhanced, ${fruits.indexOf(fruit)}: ${fruit}`);
}