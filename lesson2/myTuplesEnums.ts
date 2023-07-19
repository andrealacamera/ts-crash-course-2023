// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

// without the request of specific order, we can avoid the tuple, as follows...
const user: (string | number)[] = [ "andrea", 1] 
// a string, a number, doesn't matter which one is the first.

// BUT if the order is important, we need a specific structure - the tuple (as in Python lists or tuples!!!)

const user2: [string, number] = ["Andrea", 1234] // First the string, then the number!
const user3: [string, number] = [321, "tom"] // this is wrong!

// A very common use:
let rgb: [number, number, number] = [128, 122, 111] // the three numbers have a specific order!

// Some issues with tuples: 
// 1) we can re-assign one element of the array/tuple. e.g:
user2[1] = 9876 // not sure that we can do it, but it seems an innocent command...

// 2) since the tuple is an array, we can use the methods such as puch ,pop, etc
rgb.push(-33) // this is VERY BAD! the RGB color is gone! and no errors are raised from TSC... 
console.log(rgb) // the result...

// Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure.

// For example, in the case of airplane seat:
enum seatChoice {
  AISLE, 
  MIDDLE,
  WINDOW
}

const seat = seatChoice.AISLE  // each item automatically gets 0,1,2,etc value. AISLE=0 but we can initialize the enum with default values (number, string, etc)
// For example, starting from 1, the other items are 2,3, and 4. Magic!
enum Direction {
  UP = 1,
  DOWN, 
  LEFT,
  RIGTH
}



// A very important thing is the compiled code (TS -> JS). See with playground the differences between the compiled code "enum seatChoice" vs "const enum searChoice" (less and cleaner code!)




export {}