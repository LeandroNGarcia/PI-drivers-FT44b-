import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, test } from "vitest";
import Nav from "../src/components/nav/nav"
import { BrowserRouter } from 'react-router-dom';

describe("Nav", () => {
    afterEach(cleanup)
    test("Se debe renderizar el componente", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        )
    });
    test("Deberia haber un boton para Drivers", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        )
        screen.getByRole("button", { name: "Drivers" })
    });
    test("Deberia haber un boton para Teams", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        )
        screen.getByRole("button", { name: "Teams" })
    });
    test("Deberia haber un boton para Customization Hub", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        )
        screen.getByRole("button", { name: "Customization Hub" })
    });
    test("Deberia haber un boton para logout", () => {
        render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        )
        screen.getByRole("button", { name: "logout" })
    });
})