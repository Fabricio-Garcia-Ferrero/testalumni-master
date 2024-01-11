import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario', () => {
    let textfield
    let button
    let heading

    beforeEach(() => {
        render(<FormUsuario />);
        textfield = screen.getByLabelText('Nombre')
        button = screen.getByRole('button', { name: 'Submit' });
        heading = screen.getByRole('heading', { level : 2 })
    });

    test('Existe el textfield', () => 
    {
        expect(textfield).toBeInTheDocument()
    })

    test('Existe el button', () => 
    {
        expect(button).toBeInTheDocument()
    })

    test('Existe el heading', () => 
    {
        expect(heading).toBeInTheDocument()
    })

    test('Borrar Formulario', async () => 
    {
        const user = userEvent.setup() 
        await user.click(button)
        expect(textfield.value).toBe('')
    })

});