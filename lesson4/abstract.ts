// Abstract Classes (same example as in interfaces.ts)

// The abstract class is a blueprint!
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}
  abstract getSepia(): void // we leave to the future class the implementation!
  // Of course, we can define a "concrete" method and use directly in the object instanced 
  getPhotoNumber(): number {
    return 42
  }
}

//const ii = new TakePhoto("front", "normal", 0) // an abstract class cannot be instanced

// Now we can define a "concrete" class
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    super(cameraMode, filter, burst); // Just as in JavaScript, if we have a base class, we need to call super(); in the constructor body before using any `this` members.
  }
  // we need to define the implementation of the abstract method
  getSepia(): void {
    console.log("Sepia!")
  }

}

const t = new Instagram("front", "normal", 0)
t.getSepia() // from Instagram
console.log(t.getPhotoNumber()) // from TakePhoto