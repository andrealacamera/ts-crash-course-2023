function detectType(val: number | string) {
  // no possibility to know if it's a number or a string
  // we must check !
  if (typeof val === "string") {
    return val.toUpperCase()
  } else if (typeof val === "number") {
    return val.toString()
  }
  return null
}


// be careful with null -> typeof null === "object"
function myfunc(val: string[] | null) {
  if (typeof val === 'object') {
    console.log(val[0]) // val is possibly null!
  } 
}

// Truthiness narrowing
function myfunc2(val: string) {
  if (val) {
    // val is a not empty string!
    console.log(val.length)
  } else { 
    console.log("empty string!") 
  }
}




// The `in` operator narrowing

interface User {
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function checkAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin
  }
  return false
}


// `instanceof` operator
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}


// Type predicates
type Fish = { swim: () => void}
type Bird = { fly: () => void}
function isFish( pet: Fish | Bird) {
  // as tells the compiler to consider the pet as a Fish (type assertion)
  // we test if there is swim on the pet (thus it's a fish!)
  return (pet as Fish).swim !== undefined
}

function getFood( pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    // pet IS a FISH | BIRD because the value of pet is not determined
    return "fish food"
  }
  return "bird food"
}

// Since we are using a function (a boolean function) that returns true / false for the type of the pet, we are not sure of the TYPE of the PET. We need a function that returns the TYPE BIRD or the TYPE FISH to be sure!
// We change the first function isFish adding a returning predicate: pet is Fish 
function isFish2(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined
}

//Now we can be sure!

function getFood2( pet: Fish | Bird) {
  if (isFish2(pet)) {
    pet
    // pet IS a FISH now !
    return "fish food"
  }
  pet
  return "bird food"
}

// Discriminated Union
interface Circle {
  kind: "circle"
  radius: number
}
interface Square {
  kind: "square"
  side: number
}
interface Rectangle {
  kind: "rectangle"
  length: number
  width: number
}

type Shape = Circle | Rectangle | Square

function getShapeArea (shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
  }
  if (shape.kind === 'square') {
    return shape.side ** 2
  }
  if (shape.kind === 'rectangle') {
    return shape.length * shape.width
  }
}
// The same checking works with switch statements as well. 
function getArea2 (shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "rectangle":
      return shape.length * shape.width
    case "square":
      return shape.side ** 2
    default: 
      const _anyname: never = shape
      return _anyname  
  }
}

// BUT! If we add a new shape to Shape (e.g. Triangle), the above function will cause a TypeScript error: Type 'Triangle' is not assignable to type 'never'. that's because we must add a new case to the switch and be sure to perform the exhaustiveness checking!

// in other words: the default is never reached! never executed! NEVER!