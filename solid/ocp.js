class Weapon {
  constructor(damage) {
    this.damage = damage;
  }

  attack() {}
}

class Sword extends Weapon {
  attack() {
    console.log("Sword attack " + this.damage);
  }
}

class Knife extends Weapon {
  attack() {
    console.log("Knife attack " + this.damage);
  }
}

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    this.weapon.attack();
  }
}

const sword = new Sword(10);
const knife = new Knife(4);
const witcher = new Character("Witcher", sword);
const corvo = new Character("Corvo", knife);
witcher.attack();
corvo.attack();
