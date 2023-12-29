import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, test } from "vitest";
import Team from "../src/components/team/team"

const equipo =
    {
        name: "Toyota",
        id: "4"
    }

describe("Team", () => {
    afterEach(cleanup)
    test('Debe renderizarse el componente', () => {
        render(<Team equipo={equipo} />)
    })

    test("Se debe encontrar definido una etiqueta con el nombre del equipo", () => {
        render(<Team equipo={equipo} />)
        screen.getByText(equipo.name)
    })
    test('Se debe encontrar definida una etiqueta <img> en el componente', () => {
        render(<Team equipo={equipo} />)
        screen.getByRole("img")
    })
    test('Se debe encontrar definida una etiqueta con el id del equipo', () => {
        render(<Team equipo={equipo} />)
        screen.getByText(equipo.id)
    })
})