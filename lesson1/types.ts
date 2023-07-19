// A lot of types.... (and errors!)

const greetings: string = 'Hello!'
console.log(greetings)

// Of course we cannot assign to numbers or bool
greetings = 42
greetings = true


// A number variable. Note that TS prevent the use of methods reserved to strings, such as toLowerCase() and similar.
let mynum: number = 42
mynum.toLowerCase()

//boolean var
let isLogged: boolean = true

// TS can infer the type (primitive type) from the assignment. The previous two variables can be inferred because after declaration we immediately assign the value. Example
let mytext = "Andrea"
let mynumber = 42
let mybool = true

// not permitted!
mytext = 44
mybool + 333


// Don't use ANY!

let hero;
function getHero() {
  return "Iron Man"
}

hero = getHero()
// now TS infers that hero is `any` type. This is wrong, because TS doesn't kwnow what type is (of course, the function returns a string, but if we change it we can return anything!!) ANY breaks the consistency of the code!


// In order to remove the error "Cannot redeclare block-scoped variable 'greetings'.ts(2451)" we can add export {} at the end of the code.

export {}