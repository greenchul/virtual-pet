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
  test("initial children is an empty array", () => {
    expect(pet.children).toEqual([]);
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
  test("Should throw error if pet is not alive", () => {
    pet.age = 50;
    expect(() => {
      pet.growUp();
    }).toThrow("Your pet is no longer alive :(");
  });
});

describe("Walk method", () => {
  const pet = new Pet("Sam");
  test("Pets fitness should increase by 4 when walk method is called", () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toBe(8);
  });
  test("Pets fitness should reach a maximum of 10 when walk method is called", () => {
    pet.walk();
    expect(pet.fitness).toBe(10);
  });
  test("Should thrown an error if pet is not alive", () => {
    const pet = new Pet("Chandler");
    pet.age = 30;
    expect(() => {
      return pet.walk();
    }).toThrow("Your pet is no longer alive :(");
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
  test("Should throw an error if the pet is not alive", () => {
    const pet = new Pet("Ross");
    pet.hunger = 20;
    expect(() => {
      return pet.feed();
    }).toThrow("Your pet is no longer alive :(");
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
    pet.hunger = 9;
    expect(pet.checkup()).toBe("I am hungry");
  });
  test("Should return 'I am hungry AND I need a walk' when hunger is 5 or greater AND fitness is 3 or less", () => {
    pet.hunger = 7;
    pet.fitness = 3;
    expect(pet.checkup()).toBe("I am hungry AND I need a walk");
  });
  test("Should return 'Your pet is no longer alive :(' if pet is not alive", () => {
    pet.hunger = 20;
    expect(pet.checkup()).toBe("Your pet is no longer alive :(");
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

describe("haveBaby method", () => {
  const parent = new Pet("Dave");
  parent.haveBaby("Clive");
  test("children.length will be 1 when haveBaby method is called", () => {
    expect(parent.children.length).toBe(1);
  });
  test("Should add a new Pet object with name Clive when Clive is passed as childs name", () => {
    expect(parent.children[0]).toBeInstanceOf(Object);
    expect(parent.children[0].name).toBe("Clive");
  });
  test("Should throw an error if the pet is not alive", () => {
    parent.age = 50;
    expect(() => {
      return parent.haveBaby("Charlie");
    }).toThrow("Your pet is no longer alive :(");
  });
});

describe("Children methods", () => {
  test("Child should age by 1 year when growUp method called", () => {
    const parent = new Pet("Richard");
    parent.haveBaby("Clive");
    parent.children[0].growUp();
    expect(parent.children[0].age).toBe(1);
  });
  test("Childs fitness should increase by 4 when walk method called", () => {
    const parent = new Pet("Richard");
    parent.haveBaby("Clive");
    parent.children[0].fitness = 5;
    parent.children[0].walk();
    expect(parent.children[0].fitness).toBe(9);
  });
  test("Childs hunger should decrease by 3 when feed method called", () => {
    const parent = new Pet("Richard");
    parent.haveBaby("Clive");
    parent.children[0].hunger = 7;
    parent.children[0].feed();
    expect(parent.children[0].hunger).toBe(4);
  });
  test("checkup method should work on child", () => {
    const parent = new Pet("Richard");
    parent.haveBaby("Clive");
    expect(parent.children[0].checkup()).toBe("I feel great!");
  });
  test("Child pet should be able to die", () => {
    const parent = new Pet("Richard");
    parent.haveBaby("Clive");
    parent.children[0].hunger = 30;
    expect(parent.children[0].isAlive).toBe(false);
  });
});

describe("adoptChild method", () => {
  const parent = new Pet("Sally");
  const child = new Pet("Tim");
  test("adoptChild method should add a child to parent children property", () => {
    parent.adoptChild(child);
    expect(parent.children.length).toBe(1);
  });
  test("Should throw an error if an object is not passed as a argument", () => {
    expect(() => {
      return parent.adoptChild("Child");
    }).toThrow("Can only adopt a Pet");
  });
  test("Should throw an error if pet is no longer alive", () => {
    parent.age = 50;
    expect(() => {
      return parent.adoptChild(child);
    }).toThrow("Your pet is no longer alive :(");
  });
});
