/* :::: COMMENTS :::: */
import { useState } from 'react';
import DetailStyles from '../styles/DetailStyles.module.css';


export default function Comments({ comments }) {

  const [commentState, setComments] = useState('');



  function handleDeleteComment(id) {

    setComments([...comments].filter((item) => item.id !== id))
  }


  console.log("COmmentes: ", comments)
  console.log('State: ', commentState)



  return (<>
    <title>Comments:</title>
    <ul role="list">
      {comments && comments.map((comment, index) => (
        <li key={index}
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