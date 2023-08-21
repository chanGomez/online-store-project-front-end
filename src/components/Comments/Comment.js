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
      } = useContext(CommentContext);

      function toggleView(e) {
        setViewEditToggleForm(!viewEditToggleForm);
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