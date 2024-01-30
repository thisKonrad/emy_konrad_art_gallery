/* :::: COMMENT FORM :::: */
import DetailStyles from '../styles/DetailStyles.module.css';


export default function CommentForm({ addComment }) {

  function handleSubmitComment(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(comment.value);
    event.target.reset();
  }


  return (
    <form
      className={DetailStyles.comment_wrap}
      onSubmit={handleSubmitComment}>
      <label
        className={DetailStyles.comment_label}
        htmlFor="comment">
        Add comment:
      </label>
      <textarea
        className={DetailStyles.textarea}
        type="text"
        id="comment"
        name="comment"
        rows="3"
        minLength={2}
        maxLength={120}
        autoComplete='none'
        required />
      <button
        className={DetailStyles.submit_button}
        type="submit">
        comment
      </button>
    </form>
  );
}
