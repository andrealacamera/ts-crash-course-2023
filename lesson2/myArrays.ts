// in order to define a string array, we have to use string[]. Otherwise an error is raised (first 2 errors, then the rigth solution)
const superHeros = []
superHeros.push('Hulk') // error: the type is `never` (see past lessons)

const superHeros2: [] = [] // type is an empty array!
superHeros2.push("Hulk") // same error!

const superHeros3: string[] = [] // OK!
superHeros3.push("Hulk") // ok!

// Of course we can set different array types
const superPower: number[] = []
const superMarvel: boolean[] = [] 

// Another way to define the array type is Array<type>. Any type (included the user-defined ones!)

const newArr: Array<string> = []

type User = {
  name: string,
  email: string,
} 
const Users: Array<User> = [] // or User[]
Users.push({
  name: "Andrea",
  email: "andrea@teiga.it"
})