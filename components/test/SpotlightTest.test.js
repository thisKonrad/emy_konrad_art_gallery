/*SPOTLIGHT TEST Art Pieces are displayed */
import { render, screen } from "@testing-library/react";
import ArtPieces from "../ArtPieces";


const testPIC = [
    {
        slug: 'blue-and-red',
        artist: 'Jung-Hua Lui',
        name: 'Blue and Red',
        imageSource: 'https://example-apis.vercel.app/assets/art/blue-and-red.jpg',
    },
    {
        slug: 'man-digital-illustration',
        artist: 'Francesco Ungaro',
        name: 'Man Digital Illustration',
        imageSource: 'https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg',
    },
];

test("Pieces-Display as List: ", () => {
    render(<ArtPieces pieces={testPIC} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
});

test("All Images Displayed: ", () => {
    render(<ArtPieces pieces={testPIC} />);
    const image = screen.getAllByRole("img");
    expect(image).toHaveLength(6);
});

test("EAll Titles Displayed: ", () => {
    render(<ArtPieces pieces={testPIC} />);
    const title = screen.getAllByRole("heading");
    expect(title).toHaveLength(3);
});

test("All Artist Displayed: ", () => {
    render(<ArtPieces pieces={testPIC} />);
    const artist1 = screen.getByText('Jung-Hua Lui');
    const artist2 = screen.getByText('Francesco Ungaro');
    expect(artist1).toBeInTheDocument();
    expect(artist2).toBeInTheDocument();
});
