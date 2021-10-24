class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
  }
  growUp() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  }
  walk() {
    const MAX_FITNESS = 10;
    this.fitness += 4;
    if (this.fitness > MAX_FITNESS) {
      this.fitness = MAX_FITNESS;
    }
  }
  feed() {
    const MIN_HUNGER = 0;
    this.hunger -= 3;
    if (this.hunger < MIN_HUNGER) {
      this.hunger = MIN_HUNGER;
    }
  }
}

module.exports = Pet;
