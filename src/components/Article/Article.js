import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { getArticleByIdAPI, deleteArticleByIdAPI } from "../API/API";
import "./Article.css";

function Article() {
  const [article, setArticle] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  //this is the code that let my delopy work but is an infinite loop
  useEffect(() => {
    FetchArticleById();
    // eslint-disable-next-line
  }, [id]);

  //this is the code that breaks my deploy
  // useEffect(() => {
  //   FetchArticleById();
  // }, [id]);

  async function FetchArticleById() {
    try {
      let result = await getArticleByIdAPI(id);

      setArticle(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteArticle = async () => {
    try {
      const response = await deleteArticleByIdAPI(id);

      const { name } = response.data;
      alert(`Post ${name} has been deleted`);
      navigate("/articles");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {article && (
        <div id="article" className="container">
          <div className="imageAndInfo container">
            <div className="image">
              {" "}
              <img
                className="img-article"
                src={article.url}
                alt="product"
                style={{ maxWidth: "150px" }}
              />
            </div>

            <div className=" info">
              <p style={{ fontWeight: "bold" }}>{article.name}</p>
              <p>${article.price}</p>
              <div className="info-container">
                <p style={{ fontWeight: "bold" }}>{article.size} • </p>
                <p>{article.category} • </p><p>{article.condition} • </p>
                <p>{article.gender}  • </p><p>{article.color}</p>
              </div>
              <hr className="below-detail-row"></hr>
              <p>{article.discription}</p>
            </div>
          </div>
          <hr></hr>

          <div className="buttons">
          <button className="button-59" onClick={() => navigate("/articles")}>Back</button>
            <Link to={`/articles/${id}/edit`}>
              {" "}
              <button className="button-59">Edit</button>
            </Link>
            <button className="button-59" onClick={() => deleteArticle()}>Delete</button>
          </div>
        </div>
      )}
      <div className="comments">
        <Comments />
      </div>
    </div>
  );
}

export default Article;
