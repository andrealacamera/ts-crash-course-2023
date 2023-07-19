// Interfaces
// An interface declaration is another way to name an object type.
// readonly keyword, optional params and other stuff seen before for Type Aliases are still valid. 

// We can also defined function prototypes inside the interface, a sort of "skeleton" of the class (no implementation here!)

interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  startTrail: () => string // this can be startTrail(): string 
  getCoupon(a: string, b: number): number // this method has two input params (a string and a number) and returns a number. Note that in the definition below we do not have to use a, b for the param name.
}

const newUser: User = {
  dbId: 22, 
  email: "andrea@teiga.it",
  userId: 22,
  startTrail: () => {
    return "trail started"
  },
  getCoupon: (text: "july23", value: 111) => {
    return 0
  }
}


// Interfaces vs Type. See here https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// If we are not copletely satisfied with an interface definition, we can add new fields to the existing one! (not possibile in Type because a type cannot be changed after being created). Note that the interface name is still the same!
interface User {
  newFeature?: string
} 
// From now we can use the entire interface defined before PLUS the newFeature (optional) added here!


// A similar behaviour is INTERFACE EXTENDING (Actually, this can be also done in Type Aliases by using the intersection operator "&")
interface Admin extends User {
  // all the User props are here!
  // we can add new specific prop
  role: "admin" | "ta" | "editor"
  address: string // etc
}







export {}