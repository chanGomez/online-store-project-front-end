import Axios from "./Axios";

async function getAllArticlesAPI() {
  try {
    let result = await Axios.get("/articles");
    return result;
  } catch (e) {
    return e;
  }
}

async function getArticleByIdAPI(id) {
  try {
    let result = await Axios.get(`/articles/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

async function deleteArticleByIdAPI(id) {
  try {
    let result = await Axios.delete(`/articles/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

async function updateArticleByIdAPI(id, updatedArticle) {
  try {
    let result = await Axios.put(`/articles/${id}`, updatedArticle);

    return result;
  } catch (e) {
    return e;
  }
}

async function createArticleAPI(article) {
  try {
    let result = await Axios.post(`/articles`, article);

    return result;
  } catch (e) {
    return e;
  }
}

//COMMENTS API
async function getCommentsAPI(id) {
  try {
    let result = await Axios.get(`/articles/${id}/comments`);
    return result;
  } catch (e) {
    return e;
  } 
}

async function createCommentAPI(id, newComment) {
  try {
    let result = await Axios.post(`/articles/${id}/comments`, newComment);

    return result;
  } catch (e) {
    return e;
  }
}

async function updateCommentAPI(id, updatedCommentId, updatedComment) {
  try {
    let result = await Axios.put(
      `/articles/${id}/comments/${updatedCommentId}`,
      updatedComment
    );

    return result;
  } catch (e) {
    return e;
  }
}

async function deleteCommentAPI(id) {
  try {
    let result = await Axios.delete(`/articles/${id}/comments/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

export {
  getAllArticlesAPI,
  getArticleByIdAPI,
  deleteArticleByIdAPI,
  updateArticleByIdAPI,
  createArticleAPI,
  getCommentsAPI,
  // getOneCommentAPI,
  createCommentAPI,
  updateCommentAPI,
  deleteCommentAPI,
};
