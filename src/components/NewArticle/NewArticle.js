import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticleAPI } from "../API/API";
import "./NewArticle.css";

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
  // const [selectedFile, setSelectedFile] = useState(null);

  function handleOnchange(id, value) {
    // console.log(id, value);
    setArticle({
      ...article,
      [id]: value,
    });
  }

  // function handleImageUpload(files) {
  //   console.log(files);
  //   setArticle({
  //     ...article,
  //     // url: files,
  //   });
  // }
  async function handleCreateArticle(e) {
    e.preventDefault();
    try {
      await createArticleAPI(article);
      //restart the form
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

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="addingSpace">
      <h2>Post Article</h2>
      <form onSubmit={handleCreateArticle}>
        <div className="mb-3">
          <label className="formLabel">Name</label>
          <input
            className="form-control"
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.name}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Size</label>
          <input
            className="form-control"
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
          <label className="formLabel">Gender</label>
          <input
            className="form-control"
            required
            type="text"
            name="gender"
            id="gender"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.gender}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Category</label>
          <input
            className="form-control"
            required
            type="text"
            name="category"
            id="category"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.category}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Color</label>
          <input
            className="form-control"
            required
            type="text"
            name="color"
            id="color"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.color}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Discription</label>
          <textarea
            className="form-control"
            required
            type="text-area"
            name="discription"
            id="discription"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.discription}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Condition</label>
          <input
            className="form-control"
            required
            type="text"
            name="condition"
            id="condition"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.condition}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Price</label>
          <input
            className="form-control"
            required
            type="number"
            name="price"
            id="price"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.price}
          />
        </div>
        <div className="mb-3">
          <label className="formLabel">Image</label>
          <input
            className="form-control"
            required
            // type="file"
            type="text"
            name="url"
            id="url"
            // onChange={(e) => handleImageUpload(e.target.files[0])}
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={article.url}
          />
        </div>
        <button className="button-59">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default NewArticle;
