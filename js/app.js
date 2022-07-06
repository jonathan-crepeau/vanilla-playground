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
names.elf = "Legolas";

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