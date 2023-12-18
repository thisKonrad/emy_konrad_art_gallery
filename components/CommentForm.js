import styled from "styled-components";

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  padding: 20px;
  border: 3px solid black;
  border-radius: 10px;
  max-width: 100%;
`;

const Button = styled.button`
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
`;

export default function CommentForm({ addComment }) {
  function handleSubmitComment(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(comment.value);
    console.log(comment.value);

    event.target.reset();
  }
  return (
    <Form onSubmit={handleSubmitComment}>
      <Label htmlFor="comment">Add comment:</Label>
      <Textarea type="text" id="comment" name="comment" rows="3" required />
      <Button type="submit">Send</Button>
    </Form>
  );
}
