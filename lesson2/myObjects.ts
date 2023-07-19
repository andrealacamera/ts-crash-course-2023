// Object props have type...
const User = {
  name: "Andrea",
  email: "andrea@teiga.it"
}
// in this case we obviously infer the type from the values, this is not important and very often we do not define an object in this way... A common case is passing an object to a method, in which we do smth....

function createUser({name: string, isPaid: boolean }) {
  return "OK"
}
createUser() // error: we must pass an object
createUser({}) // error: we pass an object, but there's no 'name' in there
createUser({name: "Andrea"}) // error: 'isPaid' is missing
createUser({name: "Andrea", isPaid: false}) // ok!


//We can specify the returning value of the function is an object {} with the syntax
function createCourse():{name: string, price: number} {
  return {name: "JavaScript Course", price: 100}
}
// the previous syuntax can be confusing because of the parenthesis () with no arguments in input, the colon : for the output type and the following curly brackets for the object type (and its properties) and the last {} for the function body as always... This is a mess!

// Another mess is with createUser: If we pass more arguments than those requested, we get an error
createUser({name: "Andrea", isPaid: false, email: "andrea@teiga,it"}) // email error

// BUT if we define an object (with the extra info) and we pass to the function, then no error is raised! 
const newUser = {name: "Andrea", isPaid: false, email: "andrea@teiga,it"}
createUser(newUser) // WHY ??!!

// We need good practices to stop this mess !


export {}