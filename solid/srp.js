class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showPersonInfo() {
    alert(this.name + ":" + this.age);
  }
}

class PersonDB {
  constructor(person) {
    this.person = person;
  }

  save() {
    console.log(`Saving: ${this.person.name} to database`);
  }
}

const person = new Person("NIkita", 20);
person.showPersonInfo();
const personDB = new PersonDB(person);
personDB.save();
