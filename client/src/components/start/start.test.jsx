import { render } from "@testing-library/react";
import Start from "./start";
import { expect, test } from "vitest"

test("", () => {
    const component = render(<Start/>)
    expect(component).toBe(true)
})