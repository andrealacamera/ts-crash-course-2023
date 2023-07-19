// Union types - The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
var score = 33; // the score can be a number or a string
score = 'OK!'; // it works!
score = "42"; // it works!
// now we can use the union of the two types, and create a new object (we can use partial properties)
var u = {
    name: "Andrea",
    id: 12345
};
// then change it
u = { username: "andrea_admin", id: 12345 }; // becomes an Admin 
// Union is useful in functions/methods. 
// Important! TypeScript will only allow an operation if it is valid for **every** member of the union.
function getDbId(id) {
    // some API calls
    // id.toLowerCase() we cannot call this method because it doesn't exist in number type. 
    // id + 2 nor this one can be applied to type string.
    // we can check the type and operate after be sure...
    if (typeof id === 'string') {
        id = id.toUpperCase();
    }
    else if (typeof id === 'number') {
        id = id + 2;
    }
    else {
        console.log("the never type is reached!");
    }
    console.log("Db id = ".concat(id));
}
getDbId(3);
getDbId("ubd123xxx");
