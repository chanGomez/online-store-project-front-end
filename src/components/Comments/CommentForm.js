import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CommentFrom.css"

function CommentForm(props) {
    let { id } = useParams();

    const { commentDetails } = props;

    const [comment, setComment] = useState({
        commenter: "",
        content: "",
        article_id: id,
      });

      useEffect(() => {
        if (commentDetails) {
          setComment(commentDetails);
        }
      }, [id, commentDetails, props]);

      function handleTextChange(event) {
        setComment({ ...comment, [event.target.id]: event.target.value });
      }

      function handleSubmit(event) {
        event.preventDefault();
    
        props.fromParentCommentsHandleSubmit(comment);
    
        setComment({
            commenter: "",
            content: "",
            article_id: id,
        });
      }
  return (
    <div className="form">
      {props.children}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="commenter"> Name</label>
        <input
        className="form-control"
          required
          type="text"
          id="commenter"
          placeholder="Your name"
          value={comment.commenter}
          onChange={handleTextChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="content"> Comment</label>
        <textarea
        className="form-control"
          required
          type="text"
          id="content"
          placeholder="What do you think...."
          name="content"
          value={comment.content}
          onChange={handleTextChange}
        />
        </div>

        <br />
        <button className="button-59">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm