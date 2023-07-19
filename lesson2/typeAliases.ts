// We can define our special type and use in the code, as well as the primitives ones(as input, output, or both).

// See here for the documentation: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
type User = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  creditCardDetails?: number
}

function createUser(user: User) {
  // function body
}

// readonly keyword. While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking. 
let u: User = {
  _id: "12345ttt",
  name: "Andrea",
  email: "andrea@teiga.it",
  isActive: false
}
u._id="newID" // error because it is read-only!

// Optional property: a ? just at the end of its name indicates that the prop is optional and it can be omitted.

//TypeScript provides another construct called _intersection types_ that is mainly used to combine existing object types. An intersection type is defined using the `&` operator. 

type Color = {
  colorName: string,
  colorCode: string
}

type Circle = {
  radius: number
}

type ColoredCircle = Color & Circle 

let x: ColoredCircle = {
  colorCode: 'ffee22',
  colorName: 'mycolor',
  radius: 123
}
