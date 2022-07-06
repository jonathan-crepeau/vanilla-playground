// console.log('Fear is the mind killer.');
let log = console.log; 

const person1 = {
  name: 'Jonathan',
  age: 34,
  location: "San Francisco, CA, USA",
  hairColor: "brown",
  beardColor: "red",
};

// ====================
// SECTION - Example 1, for/in loops
// ====================

const names = [
  "Gandalf",
  "Bilbo",
  "Aragorn",
  "Gimli",
]

// NOTE - Example of dot notation used to define a new property directly on the Object.
// By default, values added usig dot notation are enumerable.
names[4] = "Legolas";
// names.push('Legolas')
// Object.defineProperty(names, '4', {value: 'Legolas'});

// NOTE - The static method Object.defineProperty() defines a new property directly on the Object (in this case the names array). It can also be used as a method to modify an existing property on an object.
// By default, values added using Object.defineProperty() are immutable and NOT enumerable.
Object.defineProperty(names, "ent", {value: "Treebeard", enumerable: true});

// NOTE - Using Object.defineProperty method below to make the 3/'Gimli' key/value pair non-enumerable.

Object.defineProperty(names, "3", {enumerable: false});

// for (let x in names) {
//   console.log(x + ' ' + names[x]);
// }

// ====================
// SECTION - Example 2, for/in loops
// ====================

let middleEarth = {
  'towns': ['Hobbiton', 'Rivendell'],
  'races': ['Elves', 'Hobbits', 'Men'],
}
middleEarth.creator = 'J.R.R. Tolkien';
Object.defineProperty(middleEarth, 'age', {value: '3', enumerable: true});

// for (let p in middleEarth) {
//   console.log(p + ' - ' + middleEarth[p]);
// }



// ====================
// SECTION - Example 1, for/of loops
// ====================

// NOTE - Using the names array from for/in examples above:
// for (let x of names){
//   console.log(x)
// }

// NOTE - const will not work (vs. let keyword above) because we are reassigning the 'b; variable inside the block:
// for (const b of names) {
//   b = 'nope';
//   console.log(b);
// }

// ======================================================
// REVIEW - Thesis:
// The for/of loop above used with the 'names' array will NOT unless the property has a numeric key.

// ANSWER:
// https://stackoverflow.com/questions/52395924/how-can-javascript-arrays-have-non-numeric-keys
  // non-numeric properties are usually skipped by the iterator (for arrays). Arrays, generally, do not have arbitrary non-numeric properties. Any code that DOES assign arbitrary non-numeric properties to an array is likely in need of refactor ... OR, by example. Think of Steve's examples of for/in vs. for/of I watched on youtube.

// ====================
// SECTION - Example 2, for/of loops
// ====================

// let array1 = ['Meredith', 'Christina', 'Izzie', 'George'];

// // If defined with a numeric index, the following property will be returned with the use of a for/of loop:
// Object.defineProperty(array1, '4', { value: 'Alex'})

// for (const b of array1){
//   console.log(b);
// }