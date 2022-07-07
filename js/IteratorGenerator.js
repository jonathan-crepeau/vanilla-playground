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

// let starwars8 = {
//   title: 'The Last Jedi',
//   director: 'Rian Johnson',
//   year: '2017',
//   boxOffice: '1.3B',
// };
// NOTE - Count to help us step through properties.
// let count = -1;

// NOTE - create an object to be a generator to return some or all of the starwars8 object properties (below).

// let SW8generator = {
//   [Symbol.iterator]: function(obj){
//     return {
//       next: ()=>{
//         count++;
//         switch(count) {
//           case 0:
//             return {
//               value: obj.title,
//               done: false,
//             }
//           case 1:
//             return {
//               value: obj.year,
//               done: false,
//             }
//           case 2:
//             return {
//               value: obj.director,
//               done: false,
//             }
//             // NOTE - 'default' with switch returns the 'values' and 'done' propreties. Otherwise, if not defined in this generator, every successive use of next() simply returns 'undefined' in the console.
//           default:
//             return {
//               value: undefined,
//               done: true,
//             }
//         }
//       }
//     }
//   }
// }

// let data = SW8generator[Symbol.iterator](starwars8)
// log(data.next());
// log(data.next());
// log(data.next());
// log(data.next());
// log(data.next());


// ======================
// SECTION Example 2 - Customer Iterators & Prototypes
// ======================

// NOTE Thesis - finish Steve's examples, then create new object and set prototype to Obj1 or Obj2
// also, set count outside to see if we can get around 'data1 = ....' and data2 = ...'

let Obj1 = {
  title: 'The Last Jedi',
  director: 'Rian Johnson',
  year: 2017,
};

let Obj2 = {
  title: 'The Hobbit',
  director: 'Peter Jackson',
  boxOffice: '1.017B',
};

let myGenerator = {
  [Symbol.iterator]: function() {
    let count = -1;
    return {
      next: () => {
        count++;
        switch(count) {
          case 0:
            return {
              value: this.title ? this.title: 'No title property',
              done: false,
            };
          case 1:
            return {
              value: this.year ? this.year : 'No year property',
              done: false
            };
          case 2:
            return {
              value: this.director ? this.director : 'No director property',
              done: false
            };
          default:
            return { value: undefined, done: true};
        }
      },
    };
  },
};

Object.setPrototypeOf(Obj1, myGenerator);
Object.setPrototypeOf(Obj2, myGenerator);

let data1 = Obj1[Symbol.iterator]();
// for (let a = 0; a < Object.keys(Obj1).length; a++){
//   log(data1.next())
// }

for (let prop of Obj1){
  log(prop);
}
log('\n\n');


let data2 = Obj2[Symbol.iterator]();
// for (let a = 0; a < Object.keys(Obj2).length; a++) {
// log(data2.next())
// }

for (let prop of Obj2){
  log(prop);
}

