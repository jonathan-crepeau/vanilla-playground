// console.log('Fear is the mind killer.');

let log = console.log;

let characters = ['Finn', 'Poe', 'Rey', 'Kylo', 'Luke', 'Leia'];

// ====================================================
// ANCHOR - Basic Iterators
// ====================================================

// ======================
// SECTION Example 1
// ======================

// NOTE - The asterisk after function defines a GENERATOR FUNCTION, which returns a Generator object:
// NOTE - You can write a normal function, but if I use the keyword "yield", the function will give me back a value from some object:
// function* genny(){
//   yield 'a';
// }

// NOTE - The below code readies an iterator for use in the 'iter' variable.
// let iter = genny();
// NOTE - Iterators have one built-in method called 'next()'. You want to use this to call on the iterator;
// log(iter.next());

// ======================
// SECTION Example 2
// ======================

// NOTE - Default parameter of any function in JS is 'undefined', unless coded otherwise. And this is 'return undefined'. While it does NOT need to be hard coded into a function, lets include it below:
// function* genny() {
//   yield "a";
//   return undefined;
// }
// let iter = genny();

// log(iter.next());
// NOTE - In the console for this example, notice that when we run the next() method on the interator, it returns 'undefined' as the value, and the 'done' property switches to 'false':
// log(iter.next());

// ======================
// SECTION Example 3
// ======================

// NOTE - If we add addition 'yield's into our generator, it maintains returning those values until there are no more 'yield's. The it returns the JS function parameter default -- 'undefined' -- as the value, and switches the 'done' property from 'false' to 'true'.
function* genny() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
  return undefined;
}
let iter = genny();

// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());



// ====================================================
// ANCHOR - Custom Iterators
// ====================================================

// ======================
// SECTION Example 1 - Customer Iterator for Object
// ======================

// NOTE - Remember, Objects do not have built-in iterators. If you want an iterator to step through an object, you have to build it!

function* genny2(){
  yield 'a';
}
let iter2 = genny2();
