class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`);
  },
};

const flier = {
  fly() {
    console.log(`${this.name} умеет летать`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`);
  },
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Fish extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Fish.prototype, swimmer);

const dog = new Dog("Rex");
dog.walk();
dog.swim();

const eagle = new Eagle("Merica");
eagle.fly();
eagle.walk();

const fish = new Fish("Nemo");
fish.swim();
