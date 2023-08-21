import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { getArticleByIdAPI, deleteArticleByIdAPI } from "../API/API";
import "./Article.css";

function Article() {
  const [article, setArticle] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

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

    //this is the code that lets my delopy work but is an infinite loop
  useEffect(() => {
    FetchArticleById();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      {article && (
        <div id="article" className="container">
          
          <div className="infoContainer container">
            <div className="image">
              {" "}
              <img className="img-article" src={article.url} alt="product"/>
            </div>

            <div className="info container">
              <p>name: {article.name}</p>
              <p>Size: {article.size}</p>
              <p>category: {article.category}</p>
              <p>category: {article.condition}</p>
              <p>category: {article.gender}</p>
              <p>category: {article.color}</p>
              <p>category: {article.discription}</p>
              <p>category: {article.price}</p>
            </div>
          </div>

          <div className="buttons">
            <Link to={`/articles/${id}/edit`}>
              {" "}
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteArticle()}>Delete</button>
            <button onClick={() => navigate("/articles")}>Back</button>
          </div>
        </div>
      )}

      <Comments />
    </div>
  );
}

export default Article;
