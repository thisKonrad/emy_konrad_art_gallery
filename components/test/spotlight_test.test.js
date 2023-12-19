/* user story one test */
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import Spotlight from "../Spotlight";
import Card from "../Card";


//MOCKS:
const exampleData = {
    pieces,
    src,
    alt,
    name,
}


test("Spotlight Image", () => {
    render(<Card />);
    const Image = screen.getByRole("Image", {
        src: 'piece.image',
    });
    expect(Image).toBeInTheDocument();
});

test("Art Piece Title", () => {
    render(<Card />);
    const h3 = screen.getByRole("h3", {
        alt: 'piece.name',
    });
    expect(h3).toBeInTheDocument();
});

test("Artist", () => {
    render(<Card />);
    const h3 = screen.getByRole("h3", {
        src: 'piece.artist',
    });
    expect(h3).toBeInTheDocument();
});