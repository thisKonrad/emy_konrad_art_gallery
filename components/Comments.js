export default function Comments({ comments }) {
  return (
    <>
      {console.log("comments component")}
      <title>Comments:</title>
      <ul role="list">
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
