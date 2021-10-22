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

describe("pet methods", () => {
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
