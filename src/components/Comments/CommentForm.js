import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter"> Name:</label>
        <input
          required
          type="text"
          id="commenter"
          placeholder="Your name"
          value={comment.commenter}
          onChange={handleTextChange}
        />
        <label htmlFor="content"> Comment:</label>
        <textarea
          required
          type="text"
          id="content"
          placeholder="What do you think...."
          name="content"
          value={comment.content}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CommentForm