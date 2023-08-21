import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {
  getCommentsAPI,
  createCommentAPI,
  updateCommentAPI,
  deleteCommentAPI,
} from "../API/API";

import { CommentContext } from "../Context/context";

// const API = process.env.REACT_APP_API_URL;

function Comments() {
  const [comments, setComments] = useState([]);

  const [viewEditToggleForm, setViewEditToggleForm] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetchCommments();
    // eslint-disable-next-line
  }, [id]);

  async function fetchCommments() {
    try {
      let result = await getCommentsAPI(id);
      console.log(result);

      if (result?.status === 200){
      setComments(result.data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  async function handleAdd(newComment) {
    try {
      let result = await createCommentAPI(id, newComment);
      setComments([result.data, ...comments]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit(updatedComment) {
    console.log("Handle Edit", updatedComment);
    try {
      let result = await updateCommentAPI(
        id,
        updatedComment.id,
        updatedComment
      );

      const copyCommentArray = [...comments];

      const indexUpdateComment = copyCommentArray.findIndex((comment) => {
        return comment.id === updatedComment.id;
      });


      copyCommentArray[indexUpdateComment] = result.data;

      setComments(copyCommentArray);
      
      setViewEditToggleForm(!viewEditToggleForm);
    } catch (error) {
      alert("sorry, we cannot update, please contact support");
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteCommentAPI(id);

      let filteredCommentArray = comments.filter((item) => item.id !== id);

      setComments(filteredCommentArray);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="Comments">
      <h2>Thoughts</h2>
      <CommentForm fromParentCommentsHandleSubmit={handleAdd}>
        <h3>Add a New Comment</h3>
      </CommentForm>

      {comments.length === 0 ? (<p>no comments yet</p>):(
                comments.map((item) => {
                  return (
                    <CommentContext.Provider
                      value={{
                        fromParentCommentsHandleSubmit: handleEdit,
                        comment: item,
                        handleDelete: handleDelete,
                        viewEditToggleForm: viewEditToggleForm,
                        setViewEditToggleForm: setViewEditToggleForm,
                      }}
                      key={item.id}
                    >
                      <Comment />
                    </CommentContext.Provider>
                  );
                }
      ))}
    </section>
  );
}

export default Comments;
