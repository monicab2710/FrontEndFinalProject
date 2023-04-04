import Cita from "../../quote/Cita";
import { fireEvent, render, renderHook, screen } from "../../../test-utils"
import '@testing-library/jest-dom';;

describe(' test a quote  into <Citas/>', () => {
    test("search a quote by character", async () => {
        render(<Cita />)

        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        fireEvent.change(input, { target: { value: "Milhouse" } })
        const button = screen.getByRole("button", { name: "Obtener Cita" });
        fireEvent.click(button);
        expect(await screen.findByText("Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?")).toBeInTheDocument()

    })

    test(' typing a number instead of String', async () => {
        render(<Cita />)
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        fireEvent.change(input, { target: { value: "27101234" } })
        const button = screen.getByRole("button", { name: "Obtener Cita" });
        fireEvent.click(button);
        expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument()

    })

    test(' test a Random Quote Generated On ButtonPress ', () => {
        render(<Cita />)
        const button = screen.getByRole("button", { name: "Obtener cita aleatoria" });
        fireEvent.click(button);
        const text = screen.findByRole("paragraph", { name: "p.sc-gueYoa.cvQbup" })
        expect(text).toBeTruthy()
    })

    test("The imput delete is working ", () => {
        render(<Cita />)
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        fireEvent.change(input, { target: { value: "Lisa" } })
        const button = screen.getByRole("button", { name: "Borrar" });
        fireEvent.click(button);
        expect(input).toBeEmptyDOMElement()
    })

    test(' the inmput  Accepts text ', async () => {
        render(<Cita />)
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");

        fireEvent.change(input, {
            target: { value: 'Milhouse' }
        });

        expect(input).toHaveDisplayValue('Milhouse')
    })



})
