import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, test } from "vitest";
import "@testing-library/user-event"
import Start from "../src/components/start/start"
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("Start", () => {
    afterEach(cleanup)
    test('Deberia renderizar el componente', () => {
        render(
            <BrowserRouter>
                <App>
                    <Start />
                </App>
            </BrowserRouter>
        )
    })
    test('Deberia renderizar una etiqueta <img>', () => {
        render(
            <BrowserRouter>
                <App>
                    <Start />
                </App>
            </BrowserRouter>
        )
        screen.getByRole("img")
    })
    test('Deberia renderizar una etiqueta <button> con el texto "Start"', () => {
        render(
            <BrowserRouter>
                <App>
                    <Start />
                </App>
            </BrowserRouter>
        )
        screen.getByRole("button", { name: "Start" })
    })
    test('Al hacer "click" en la etiqueta <button> se debe renderizar <Loading />', async () => {
        render(
            <BrowserRouter>
                <App>
                    <Start />
                </App>
            </BrowserRouter>
        )
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: "Start" }))
        expect(screen.getByRole("loading")).toBeDefined()
    })
})