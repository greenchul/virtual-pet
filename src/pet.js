const MIN_HUNGER = 0;
const MAX_FITNESS = 10;
const MIN_AGE = 0;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
  }
  get isAlive() {
    if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
      return false;
    } else {
      return true;
    }
  }
  growUp() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }
  walk() {
    this.fitness += 4;
    if (this.fitness > MAX_FITNESS) {
      this.fitness = MAX_FITNESS;
    }
  }
  feed() {
    this.hunger -= 3;
    if (this.hunger < MIN_HUNGER) {
      this.hunger = MIN_HUNGER;
    }
  }
  checkup() {
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
}

module.exports = Pet;
