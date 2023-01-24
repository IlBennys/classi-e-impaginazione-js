// QUESTA E' LA CLASSE
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //   METODO STATICO
  static confrontoTraP(x, y) {
    if (x.age > y.age) {
      return `${x.name} che ha ${x.age} anni, è più vecchio di ${y.name} che invece ha ${y.age} anni `
    } else {
      return `${x.name} che ha ${x.age} anni, è più giovane di ${y.name} che invece ha ${y.age} anni `
    }
  }
}
// QUESTE SONO LE ISTANZE
let p1 = new Person("Mario", 33)
let p2 = new Person("Paolo", 27)
let p3 = new Person("Alessandro", 21)

console.log(Person.confrontoTraP(p3, p1))
