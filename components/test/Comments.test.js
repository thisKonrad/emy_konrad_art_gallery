import { render, screen } from "@testing-library/react";
import Comments from "../Comments";

test("renders comments", () => {
  render(<Comments comments={["Super Konrad!", "Cool!", "Super!"]} />);

  const comments = screen.getAllByRole("listitem");
  expect(comments).toHaveLength(4);
  expect(comments[0]).toHaveTextContent("Super Konrad!");
  expect(comments[1]).toHaveTextContent("Cool!");
  expect(comments[2]).toHaveTextContent("Amazing!");
});
