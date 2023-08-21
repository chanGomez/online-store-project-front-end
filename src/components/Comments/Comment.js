import React, { useContext } from "react";
import { CommentContext } from "../Context/context";
import CommentForm from "./CommentForm";

function Comment() {
    const {
        comment,
        fromParentCommentsHandleSubmit,
        handleDelete,
        viewEditToggleForm,
        setViewEditToggleForm,
        comments
      } = useContext(CommentContext);

      function toggleView(e) {
        setViewEditToggleForm(!viewEditToggleForm);
        // console.log(comment.id);

        const foundIndex = comments.findIndex((item)=> {
          return e.target.id == item.id
        })
        console.log(e.target.id);
        console.log(foundIndex);
        console.log(comments[foundIndex]);

        comments[foundIndex] =
        
        setViewEditToggleForm()
      }
      
  return (
    <div className="Comment">
    <button id={comment.id} onClick={toggleView}>Edit this comment</button>
    {viewEditToggleForm ? (
      <CommentForm
      fromParentCommentsHandleSubmit={fromParentCommentsHandleSubmit}
        commentDetails={comment}
        toggleView={toggleView}
      />
    ) : (
      <div>
        <h4>
          {comment.name}
        </h4>
        <h5>{comment.discriptions}</h5>
        <p>{comment.content}</p>
        <button onClick={() => handleDelete(comment.id)}>Delete</button>
      </div>
    )}
  </div>
  )
}

export default Comment