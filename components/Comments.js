/* :::: COMMENTS :::: */
import DetailStyles from '../styles/DetailStyles.module.css';

export default function Comments({ comments }) {
  return (<>
    <title>Comments:</title>
    <ul role="list">
      {comments.map((comment, index) => (
        <li key={index}
          className={DetailStyles.comment_list}
        >
          <p
            className={DetailStyles.comment}
          >{comment}</p>
        </li>
      ))}
    </ul>
  </>);
}
