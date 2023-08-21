import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

import { getAllArticlesAPI } from "../API/API";

function Articles() {
  const [articleData, setArticleData] = useState([]);
  const [name, setName] = useState("")

  async function fetchArticlesdata() {
    try {
      let result = await getAllArticlesAPI();
      console.log(result.data);

      setArticleData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchArticlesdata();
  }, []);


  function showData() {
    return (
      <div className="container">
        <h2 className="heading"> ALL POSTINGS OF VINTAGE CLOTHING</h2>
        <ul>
          {articleData.map(({ id, name, url, price, discription, size}) => {
            return (
              <li key={id}>
                <div className="card" style={{ width: "12rem" }}>
                  <img src={url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <Link to={`/articles/${id}`} style={{ fontWeight: "bold" }}>
                      {name.length > 15 ? (name.slice(0, 13) + "...") : ( name)}
                    </Link>
                    <p> {discription.length > 15 ? (discription.slice(0, 16) + "...") : ( discription)}</p>
                  </div>
                  <div className="priceAndSize">
                    <p>${price}</p>
                    <p> {size}</p>
                    </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {articleData.length === 0 ? (
        <div>Please go create some Posts</div>
      ) : (
        showData()
      )}
    </div>
  );
}

export default Articles;
