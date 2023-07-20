// TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value. These are called _parameter properties_ and are created by prefixing a constructor argument with one of the visibility modifiers `public`, `private`, `protected`, or `readonly`.


class User {
  private readonly id: number = 1234
  constructor (
    public name: string,
    public email: string,
    private userId: string
  ) {
    // no body necessary!
  }
}

const u = new User("Andrea", "andrea@teiga.it", "xyz")
// u.userId // cannot be used here




// Getters and Setters. Note that the getter has the return type, while the setter has the input type, but no returning type is provided, since it doesn't return nothing!
class C {
	_length: number = 0;
	get length(): number {
		return this._length;
	}
	set length(value:number) {
		this._length = value;
	}
}

const cc = new C()
cc.length = 42 // setter is called
console.log(cc.length) // getter is called


// We can also define private methods (as done for fields).

class Point {
  private _distance: number
  constructor(
    public x: number,
    public y: number
  ) {}
  
  get distance(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

}

let p = new Point(4,5)
console.log(p.distance)