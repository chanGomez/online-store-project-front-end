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
    <div className="">
      <div className="">
        {viewEditToggleForm ? (
          <CommentForm
            fromParentCommentsHandleSubmit={fromParentCommentsHandleSubmit}
            commentDetails={comment}
            toggleView={toggleView}
          />
        ) : (
        <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex flex-start">
            <img className="rounded-circle shadow-1-strong me-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="40"
              height="40" />
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0" style={{fontWeight:"bold", margin:"5px"}}>
                  {comment.commenter}
                </h6>
                <span className="text-dark ms-2" style={{ marginTop:"5px"}}>{comment.content}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="small mb-0" style={{color: "#000"}}>
                  <a href="#!" onClick={() => handleDelete(comment.id)} className="link-grey">Remove</a> •
                  <a href="#!" className="link-grey" id={comment.id} onClick={toggleView}>Edit</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        )}
      </div>
    </div>

  );
}

export default Comment;
