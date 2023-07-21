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


