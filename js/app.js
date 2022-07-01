// console.log('Fear is the mind killer.');
let log = console.log; 

const person1 = {
  name: 'Jonathan',
  age: 34,
  location: "San Francisco, CA, USA",
  hairColor: "brown",
  beardColor: "red",
};

const names = [
  "Gandalf",
  "Bilbo",
  "Aragorn",
  "Gimli",
]

names[4] = "Legolas";
Object.defineProperty(names, "1", {enumerable: false});

for (let n in names) {
  log(n);
}
log();




