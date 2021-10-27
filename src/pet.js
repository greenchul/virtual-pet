const MIN_HUNGER = 0;
const MAX_FITNESS = 10;
const MIN_AGE = 0;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
  }
  get isAlive() {
    if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
      return false;
    } else {
      return true;
    }
  }
  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }
  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.fitness += 4;
    if (this.fitness > MAX_FITNESS) {
      this.fitness = MAX_FITNESS;
    }
  }
  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    this.hunger -= 3;
    if (this.hunger < MIN_HUNGER) {
      this.hunger = MIN_HUNGER;
    }
  }
  checkup() {
    if (!this.isAlive) {
      return "Your pet is no longer alive :(";
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else {
      return "I feel great!";
    }
  }
  haveBaby(name) {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    const child = new Pet(name);
    this.children.push(child);
  }
}

module.exports = Pet;
