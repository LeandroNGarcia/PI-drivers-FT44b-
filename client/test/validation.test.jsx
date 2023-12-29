import * as validation from "../src/components/driver/validation"
import { test, describe, expect } from "vitest"

describe("Validation isName", () => {
    test("Si el nombre esta correcto debe llegar undefined", () => {
        const name = "Joaquin";
        expect(validation.isName(name)).toBeUndefined()
    })
    test("Si el nombre llega vacio debe llegar un aviso", () => {
        const name = "";
        expect(validation.isName(name)).toBe("La casilla no puede estar vacia")
    })
    test("Si el nombre no comienza con mayuscula debe arrojar un aviso especifico", () => {
        const name = "joaquin";
        expect(validation.isName(name)).toBe("El nombre debe comenzar con mayúscula")
    })
    test("Si el nombre contiene numeros debe arrojar un aviso", () => {
        const name = "J0aquin";
        expect(validation.isName(name)).toBe("El nombre solo puede contener letras")
    })
})

describe("Validation isLastname", () => {
    test("Si el apellido esta correcto debe llegar undefined", () => {
        const lastname = "Diaz";
        expect(validation.isLastname(lastname)).toBeUndefined()
    })
    test("Si el apellido llega vacio debe llegar un aviso", () => {
        const lastname = "";
        expect(validation.isLastname(lastname)).toBe("La casilla no puede estar vacia")
    })
    test("Si el apellido no comienza con mayuscula debe arrojar un aviso especifico", () => {
        const lastname = "diaz";
        expect(validation.isLastname(lastname)).toBe("El apellido debe comenzar con mayúscula")
    })
    test("Si el apellido contiene numeros debe arrojar un aviso", () => {
        const lastname = "D1az";
        expect(validation.isLastname(lastname)).toBe("El apellido solo puede contener letras")
    })
})