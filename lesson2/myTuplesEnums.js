// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// without the request of specific order, we can avoid the tuple, as follows...
var user = ["andrea", 1];
// a string, a number, doesn't matter which one is the first.
// BUT if the order is important, we need a specific structure - the tuple (as in Python lists or tuples!!!)
var user2 = ["Andrea", 1234]; // First the string, then the number!
var user3 = [321, "tom"]; // this is wrong!
// A very common use:
var rgb = [128, 122, 111]; // the three numbers have a specific order!
// Some issues with tuples: 
// 1) we can re-assign one element of the array. e.g:
rgb[2] = 123; // not sure that we can do it
// 2) since the tuple is an array, we can use the methods such as puch ,pop, etc
rgb.push(-33); // this is VERY BAD!
console.log(rgb); // the result...
