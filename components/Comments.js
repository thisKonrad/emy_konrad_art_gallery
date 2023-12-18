export default function Comments({ comments }) {
  return (
    <>
      <title>Comments</title>
      <ul role="list">
        {comments &&
          comments.map((comment, index) => (
            <li key={index}>
              <p>{comment}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
