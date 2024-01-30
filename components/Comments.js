/* :::: COMMENTS :::: */
import { useState } from 'react';
import DetailStyles from '../styles/DetailStyles.module.css';


export default function Comments({ comments }) {

  const [commentState, setComments] = useState(comments);


  function handleDeleteComment(id) {

    let end = comments.indexOf(id);

    setComments(commentState.slice(id, end));
    console.log('Comments: ', commentState)

  }


  return (<>
    <title>Comments:</title>
    <ul role="list">
      {commentState.map((comment, index) => (
        <li
          key={index}
          onClick={() => handleDeleteComment(comment.index)}
          className={DetailStyles.comment_list}
        >
          <p
            className={DetailStyles.comment}
          >{comment}</p>
        </li >
      ))
      }
    </ ul >
  </>);
}