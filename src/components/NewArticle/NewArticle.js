import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticleAPI } from "../API/API";
import "./NewArticle.css"

function NewArticle() {
  let navigate = useNavigate();

  const [article, setArticle] = useState({
    name: "",
    size: "",
    gender: "",
    category: "",
    color: "",
    discription: "",
    condition: "",
    price: 0,
    url: "",
  });

  async function handleCreateArticle(e) {
    e.preventDefault();
    try {
      await createArticleAPI(article);
      setArticle({
        name: "",
        size: "",
        gender: "",
        category: "",
        color: "",
        discription: "",
        condition: "",
        price: 0,
        url: "",
      });
      navigate("/articles");
    } catch (e) {
      console.log(e);
    }
  }
  function handleOnchange(id, value) {
    setArticle({
      ...article,
      [id]: value,
    });
  }

  return (
    <div className="container" style={{width: "60%"}}>
      <h2>New Post Form</h2>
    <form onSubmit={handleCreateArticle}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="form-control"
          required
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.name}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Size</label>
        <input className="form-control"
          // required
          type="text"
          name="size"
          id="size"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.size}
        />
        <div className="form-text"> Use single letters like S, M, L</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <input className="form-control"
          required
          type="text"
          name="gender"
          id="gender"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.gender}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input className="form-control"
          required
          type="text"
          name="category"
          id="category"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.category}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Color</label>
        <input className="form-control"
          required
          type="text"
          name="color"
          id="color"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.color}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Discription</label>
        <textarea className="form-control"
          required
          type="text-area"
          name="discription"
          id="discription"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.discription}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Condition</label>
        <input className="form-control"
          required
          type="text"
          name="condition"
          id="condition"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.condition}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input className="form-control"
          required
          type="number"
          name="price"
          id="price"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.price}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input className="form-control"
          required
          type="text"
          name="url"
          id="url"
          onChange={(e) => handleOnchange(e.target.id, e.target.value)}
          value={article.url}
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
  )
}

export default NewArticle