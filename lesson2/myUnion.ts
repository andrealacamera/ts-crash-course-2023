// Union types - The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

let score: number | string = 33; // the score can be a number or a string

score = 'OK!' // it works!
score = "42" // it works!

// Define two different types:
type User = {
  name: string,
  id: number
}

type Admin = {
  username: string,
  id: number
}

// now we can use the union of the two types, and create a new object (we can use partial properties)
let u: User | Admin = {
  name: "Andrea",
  id: 12345
}

// then change it
u = {username:"andrea_admin", id: 12345} // becomes an Admin 


// Union is useful in functions/methods. 
// Important! TypeScript will only allow an operation if it is valid for **every** member of the union.
function getDbId(id: number | string) {
  // some API calls
  // id.toLowerCase() we cannot call this method because it doesn't exist in number type. 

  // id + 2 nor this one can be applied to type string.
  
  // we can check the type and operate after be sure...
  if (typeof id === 'string') {
    id = id.toUpperCase()
  } else if (typeof id === 'number') {
    id = id + 2
  } else {
    // `never` also appears when TypeScript determines there’s nothing left in a union. https://www.typescriptlang.org/docs/handbook/2/functions.html#never
    console.log(`the never type is reached!`)
  }
  console.log(`Db id = ${id}`) 
}
getDbId(3)
getDbId("ubd123xxx")

// array union
const data: Array<number> = [1,2,3]
const data2: Array<string> = ["1", "2", "3"]
const data3: Array<number> | Array<string> = ["1", "2", "3"] // as well as [1,2,3] but we cannot mix type inside the array... to do so, 
const data4: (string | number)[] = [1,2,"3"] // or 
const data5: Array<string|number> = [1,2,3,"4", "5"] // not the same as data3!!!!


// Last argument: lyteral types. 
let a: "mytype" = "mytype" // 
console.log(typeof(a)) // will print "type"
// if we try to change, wer get an error!
a = 'another type'

// In some scenarios this can be useful, especially when we combine them into unions. Examples:
// number: -1 | 0 | 1
// string: "up" | "down" | "left" | "rigth"
// etc.
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
// More details on https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
