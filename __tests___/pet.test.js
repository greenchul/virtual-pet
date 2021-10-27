const Pet = require("../src/pet");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  const pet = new Pet("Steve");
  test("returns the name Steve when passed Steve as name", () => {
    expect(pet.name).toBe("Steve");
  });
  test("has an initial age of 0", () => {
    expect(pet.age).toBe(0);
  });
  test("has an initial hunger of 0", () => {
    expect(pet.hunger).toBe(0);
  });
  test("has an initial fitness of 10", () => {
    expect(pet.fitness).toBe(10);
  });
});

describe("growUp method", () => {
  const pet = new Pet("Steve");
  test("Pet should age by 1 when growUp method called", () => {
    expect(pet.age).toBe(0);
    pet.growUp();
    expect(pet.age).toBe(1);
  });
  test("Pets fitness should decrease by 3 when growUp method called", () => {
    expect(pet.fitness).toBe(7);
  });
  test("Pets hunger should increase by 5 when growUp method called", () => {
    expect(pet.hunger).toBe(5);
  });
});

describe("Walk method", () => {
  const pet = new Pet("Sam");
  test("Pets fitness should increase by 4 when walk method is called", () => {
    pet.growUp();
    pet.growUp();
    expect(pet.fitness).toBe(4);
    pet.walk();
    expect(pet.fitness).toBe(8);
  });
  test("Pets fitness should reach a maximum of 10 when walk method is called", () => {
    pet.walk();
    expect(pet.fitness).toBe(10);
  });
});

describe("Feed method", () => {
  const pet = new Pet("Bob");
  test("Pets hunger should decrease by 3 when feed method is called", () => {
    pet.growUp();
    expect(pet.hunger).toBe(5);
    pet.feed();
    expect(pet.hunger).toBe(2);
  });
  test("Pets hunger should not drop below zero", () => {
    pet.feed();
    expect(pet.hunger).toBe(0);
  });
});

describe("Checkup method", () => {
  const pet = new Pet("Celine");

  test("Should return 'I feel great!' when fitness is > 3 and when hunger is < than 5", () => {
    expect(pet.checkup()).toBe("I feel great!");
  });

  test("Should return ''I need a walk' when fitness is 3 or less", () => {
    pet.fitness = 3;
    expect(pet.checkup()).toBe("I need a walk");
    pet.fitness = 1;
    expect(pet.checkup()).toBe("I need a walk");
  });
  test("Should return 'I am hungry' when hunger is 5 or greater", () => {
    pet.hunger = 5;
    pet.fitness = 7;
    expect(pet.checkup()).toBe("I am hungry");
    pet.hunger = 10;
    expect(pet.checkup()).toBe("I am hungry");
  });
  test("Should return 'I am hungry AND I need a walk' when hunger is 5 or greater AND fitness is 3 or less", () => {
    pet.hunger = 7;
    pet.fitness = 3;
    expect(pet.checkup()).toBe("I am hungry AND I need a walk");
  });
});

describe("Getters", () => {
  const pet = new Pet("Monica");
  test("isAlive should return true", () => {
    expect(pet.isAlive).toBe(true);
  });
  test("isAlive to return false", () => {
    pet.age = 30;
    expect(pet.isAlive).toBe(false);
  });
  test("isAlive to return false", () => {
    pet.fitness = 0;
    expect(pet.isAlive).toBe(false);
  });
  test("isAlive to return false", () => {
    pet.hunger = 11;
    expect(pet.isAlive).toBe(false);
  });
});
