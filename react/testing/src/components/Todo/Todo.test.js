import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo Test", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo></Todo>)
        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    })

    test("Varsayılan 3 nesne render edilmeli !", () => {
        const items = screen.getAllByText(/Item/i)
        expect(items.length).toEqual(3)
    })

    test("Input ve Button dokumanda bulunmalı", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
        //inputu doldur
        const name = "Cengiz"
        userEvent.type(input, name)

        //butona tıkla
        userEvent.click(button)

        expect(screen.getByText(name)).toBeInTheDocument();
    })
})