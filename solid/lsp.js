class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showPersonInfo() {
    alert(this.name + ":" + this.age);
  }

  think() {
    console.log("Think");
  }
}

class Witcher extends Person {
  fight() {
    console.log("Fight");
  }
}

class Rogue extends Person {
  hide() {
    console.log("Hide");
  }
}

class Thief extends Rogue {
  steal() {
    console.log("Steal");
  }
}

function showInfo(person) {
  person.showPersonInfo();
}

const nikita = new Person("Nikita", 20);
const corvo = new Thief("Corvo", 30);
const geralt = new Witcher("Geralt", 80);
showInfo(corvo);
showInfo(nikita);
showInfo(geralt);

corvo.hide();
