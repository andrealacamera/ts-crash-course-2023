class User {
  private readonly hiddenID: string 
  public name: string
  public email: string

  constructor(n: string, e: string) {
    this.name = n
    this.email = e
    this.hiddenID = "XYZ"
  }

  // err() {
  //   this.hiddenID = "QWERTY" // error! the field cannot modified outside the constructor!
  // }
}

const u = new User("Andrea", "andrea@teiga.it")
// u.hiddenID = "QWERTY" // error! the field is private and is only accessible within the class!
u.name = "Tom"
u.email = "tom@tom.com"