// all the params passed to the function must be typed. The returning type must be also specified after the list of params (in parentheses)


function addTwo(num: number): number {
  return num + 2
  // if we return a string (or else) we get an error!
}
console.log(addTwo(4)) // this is ok!

// same with arrow functions and/or multiple input. Default values can be used as always.
let loginUser = (name: string, email: string, isPaid: boolean = true): boolean => {
  return true
}

loginUser("Andrea", "andrea@teiga.it")


// Remark: if the returning value depends on the input value (e.g. a number greater than a constant), then the returning type can also be different. We will see the Union type (i.e. the returning type can be either a string OR a boolean)
// For Example:
const myFunc = (a:number) => {
  if (a > 10) {
    return true
  }
  return "error!"
}
console.log(myFunc(42))


// In case of using map on array (a very common case), we can specify both the input and the output of the innner map function, as follows:
const fruits = ["apple", "banana", "orange"]
const result = fruits.map( (fruit: string): string => {
  return `Best fruit is ${fruit}`
})
// Remark: The type of input (fruit: string) can be omitted, because it can be inferred from the context, but generally the output type is more useful. Indeed if we change the return statement in "return false" we get a type error.

// A good practice for void function is to explicit the returning type
function consoleError(err:string): void {
  console.log(err);
}

// In case of functions that can raise errors, the suggested type is "never"
// on this page the complete documentation: https://www.typescriptlang.org/docs/handbook/2/functions.html#never
function handleError(err:string): never {
  throw new Error(err);
}





export {}