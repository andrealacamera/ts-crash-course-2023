class User {
  readonly hiddenID: string = "XYZ"
  name: string
  email: string

  constructor(n: string, e: string) {
    this.name = n
    this.email = e
  }

  err() {
    // this.hiddenID = "QWERTY" // error! the field cannot modified outside the constructor!
  }
}

const u = new User("Andrea", "andrea@teiga.it")
// u.hiddenID = "QWERTY" // error! the field cannot modified outside the class!