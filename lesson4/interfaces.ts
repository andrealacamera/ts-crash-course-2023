// Wwe can use an implements clause to check that a class satisfies a particular interface. 

interface TakePhoto {
  cameraMode: string,
  filter: string,
  burst: number
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}
}


// A class can implement multiple interfaces: 

interface Shorts {
  createShort(): void
}

class YouTube implements TakePhoto, Shorts {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}

  public createShort(): void {
    console.log(`Short has been created!`)
  }
}