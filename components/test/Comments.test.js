/* Art Piece Details Comments Testing */

import { render, screen } from "@testing-library/react";
import Comments from "../Comments";

test("renders comments", () => {
  render(<Comments comments={["Super Konrad!", "Cool!", "Super"]} />);

  const comments = screen.getAllByRole("listitem");
  expect(comments).toHaveLength(3);
  expect(comments[0]).toHaveTextContent("Super Konrad!");
  expect(comments[1]).toHaveTextContent("Cool!");
});
