# Typescript 2023

## Contents

1. Intro. Types and declaration. Don't use `ANY`!

2. Functions. Objects, Type Aliases and Property modifiers. Arrays. Union. Tuples and Enums. Interfaces, Interface vs Type.

- How to setup Typescript for real projects

- Classes, Private Public, Getters and Setters, Protected

- Why Interface is important, Abstract class 

- Generics, Generics in Array and Arrow functions, Generic Classes

- Type Narrowing, The in operator narrowing, `Instanceof` and Type Predicates

- Discriminated Union and Exhaustiveness Checking with never

- TypeScript End


## The Project
Clone [GH repository](https://github.com/andrealacamera/ts-crash-course-2023).
All the files `lesson*/*.ts` and the `README.md` (a sort of copy of this doc) contains useful info.

## Installation 

1. Install **globally** via `npm` with:
```bash
npm install -g typescript
```

2. Then we can install on our project with:
```bash
npm install typescript --save-dev
```

3. Test installation with `tsc -v`. Execute TS with `tsc myfile.ts` (a new file `myfile.js` will be created)

## Playground

We can try TS without installing nothing, thanks to the Playground on [TypeScriptLang.org](https://www.typescriptlang.org/play)


## Lesson 1

### 1 - Intro

What typescript does? Static Checkin. 
Typescript (TS) analyses the code as we type. That's it! 

TS is a development tool. The (final) project will run in JS. 

See `lesson1/*.ts` to see first examples of TS.

### 2 - Types and declarations

Main types are `number`, `boolean`, `string`, `null`, `undefined`, `object`, `array`, `tuples`, and many more. 

There are special types, such as `any` (more on this later!), `never`, `unknown`. More details [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)   

==Syntax: `let variableName: type = value`==

> Remark: No types for `int` or `float`... We have to use `number`!

### 3 - Don't use `ANY`!

We can use `any` whenever we don't want a particular value to cause type checking errors. But, `ANY` breaks the consistency of the code! See the end of the `types.ts` file for an example.

> Use the compiler flag `noImplicitAny` to flag any implicit any as an error.


## Lesson 2

See `lesson2/*.ts` to see all the examples of TS.

### 1 - Functions 

All the params passed to a function must be typed. The returning type must be also specified.

Syntax: 
```ts
function myFunc(id: number, name: string): string {
   // function body
   return `Hello ${name}, your ID is ${id}`
}
```

Pay attention to multiple returning value (see Union in future lesson), as well as the special `void` and `never` types.

Also the inner function of `map` (used in array) can be type checked.
```ts
const fruits = ["apple", "banana", "orange"]
const result = fruits.map( (fruit: string): string => {
	return `Best fruit is ${fruit}`
})
```

### 2 - Objects

There are some bad behaviours when we use object in functions, we need good practices to stop this mess!

### 3 - Type aliases and Property Modifiers

We can define our special types, and use in the code, as well as the primitives ones.

Syntax:
```ts
tyep Name = {
	// props
}
```

[Type aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) are one way to name an object type. Another one is `interface` (see below!)

While it won’t change any behaviour at runtime, a property marked as `readonly` can’t be written to during type-checking.

A `?` just at the end of its name indicates that the prop is optional and it can be omitted.

An intersection type is defined using the `&` operator. It is used to build up new types from other types by extending them. TypeScript provides another construct called _intersection types_ that is mainly used to combine existing object types.

See [Here](https://www.typescriptlang.org/docs/handbook/2/objects.html#property-modifiers) for all the property modifiers.

### 4 - Arrays

To define the array type we use `Array<type>`. Any type (included the user-defined ones!)

[More details](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

### 5 - Union types

It’s time to start _combining_ types in interesting ways... 

[Union types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

### 6 - Tuples and Enums

A `tuple` type is another sort of `Array` type that knows exactly how many elements it contains, and exactly which types it contains at **specific** positions.

Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is _not_ a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which we should know exists, but maybe hold off on using unless we are sure.

### 7 - Interfaces

An _interface declaration_ is another way to name an object type.

Syntax:
```ts
interface Name {
	// props
}
```

> Remark! WRT Type aliases there's no = sign.



## References

- [Full video](https://youtu.be/30LWjhZzg50)
- [TypeScriptLang](https://www.typescriptlang.org/)

