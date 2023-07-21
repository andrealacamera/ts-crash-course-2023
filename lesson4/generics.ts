// generics: to create a component that can work over a variety of types rather than a single one.

//generics are defined by angular brackets <Type> or <T>. This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use Type again as the return type. 

function identity<T>(val: T): T {
  console.log(typeof(val))
  // let v = val.toLowerCase() --> Remark! the compiler will enforce that you use any generically typed parameters in the body of the function correctly. That is, that you actually treat these parameters as if they could be any and all types.
  if (typeof(val) === 'string') {
    let v = val.toUpperCase()
    console.log(v)
  }
  return val
}
 
identity("Andrea")
identity(42)
identity(true)
//Of course we can pass a user-defined type, as
interface Fake {
  name: string
  id: number
}
let a: Fake = {name:"a", id:0}
identity(a)

// If we intented to work with arrays of Type, we can use Type[]. Alternatively we can write Array<Type> (as seen in lesson 2 - Arrays)

//Example:
function getSomething<T>( products: T[]): T {
  return products[0] // first product of products has type T
}

// Arrow function version -> We add <T> BEFORE the arrow function () => {}
const getMoreSomething = <T>(products: T[]): T => {
  // do something
  return products[0]
}

// One line arrow function
const getMoreSomething2 = <T>(products: T[]): T => products[0]


// When we use JSX / TSX syntax (React, etc) it's common to find a comma after the <Type> (i.e. <Type,>).It's done to understand it's a type parameter and not a JSX element


// Remark! We can use different name for the generic type parameter, until the number of type variables and how the type variables line up.
//Example
function identity2<Input>(arg: Input): Input {
  return arg
}

// We can also use more Types, separated by a comma (as in the JSX remark here above)
function fff<T,U>(arg: T, arg2: U): object {
  return {
    one: arg,
    two: arg2
  }
}


// Generic Classes:  First we define two interfaces, then we create a generic class to instance different objects.
interface Course {
  name: string,
  author: string,
  subject: string
}

interface Quiz {
  name: string,
  type: string
}

class Sellable<T> {
  public cart: T[] = []
  // any products can be placed on the cart
  addToCart(product: T) {
    this.cart.push(product)
    console.log(this.cart)
  }
}

let x = new Sellable()
let qq: Quiz = {
  name: "quiz1",
  type: "quiz"
}
let cc: Course = {
  name: "course JS",
  author: "Andrea",
  subject: "-"
}
x.addToCart(qq)
x.addToCart(cc)