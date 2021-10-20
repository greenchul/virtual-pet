const Pet = require("../src/pet")


describe("constructor", ()=>{
    test("returns an object", ()=>{
        expect(new Pet("Fido")).toBeInstanceOf(Object)
    })
    
    test("returns the name Steve when passed Steve as name", ()=>{
        const pet = new Pet("Steve")
        expect(pet.name).toBe("Steve")
    })
})

describe("pet methods", ()=>{
    test("Pet should age by 1 when growUp method called", ()=>{
        const pet = new Pet("Steve")
        expect(pet.age).toBe(0)
        pet.growUp()
        expect(pet.age).toBe(1)
    })
    
})