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

const API = process.env.REACT_APP_API_URL;

function Comments() {
  const [comments, setComments] = useState([]);

  const [viewEditToggleForm, setViewEditToggleForm] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetchCommments();
    // eslint-disable-next-line
  }, [id, API]);

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
    <section>
  <div class="container my-5 py-5 text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12 col-lg-10 col-xl-8">
        <div class="d-flex justify-content-center align-items-center mb-4">
          <div class="card" style={{width:"45rem"}}>
          <h2>Thoughts</h2>
          
      {comments.length === 0 ? (<p style={{color:"#C0C0C0"}}>no comments yet</p>):(
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
            <CommentForm fromParentCommentsHandleSubmit={handleAdd}>
        <h3>Add a New Comment</h3>
      </CommentForm>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Comments;
