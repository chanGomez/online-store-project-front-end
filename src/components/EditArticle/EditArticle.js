import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleByIdAPI, updateArticleByIdAPI } from "../API/API";
import "./EditArticle";

function EditArticle() {
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await getArticleByIdAPI(id);

        setArticle(response.data);
      } catch (error) {
        navigate("/404");
      }
    };

    fetchArticle();
    // eslint-disable-next-line
  }, []);

  const handleTextChange = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
  };

  const updateArticle = async (id) => {
    try {
      await updateArticleByIdAPI(id, article);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateArticle(id);
      navigate(`/articles/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="addingSpace">
        <h2>Edit Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="formLabel">Name</label>
            <input
              className="form-control"
              required
              type="text"
              name="name"
              id="name"
              onChange={handleTextChange}
              value={article.name}
            />
          </div>
          <div>
            <label className="formLabel">Size</label>
            <input
              className="form-control"
              // required
              type="text"
              name="size"
              id="size"
              onChange={handleTextChange}
              value={article.size}
            />
          </div>
          <div>
            <label className="formLabel">Gender</label>
            <input
              className="form-control"
              required
              type="text"
              name="gender"
              id="gender"
              onChange={handleTextChange}
              value={article.gender}
            />
          </div>
          <div>
            <label className="formLabel">Category</label>
            <input
              className="form-control"
              required
              type="text"
              name="category"
              id="category"
              onChange={handleTextChange}
              value={article.category}
            />
          </div>
          <div>
            <label className="formLabel">Color</label>
            <input
              className="form-control"
              required
              type="text"
              name="color"
              id="color"
              onChange={handleTextChange}
              value={article.color}
            />
          </div>
          <div>
            <label className="formLabel">Discription</label>
            <input
              className="form-control"
              required
              type="text-area"
              name="discription"
              id="discription"
              onChange={handleTextChange}
              value={article.discription}
            />
          </div>
          <div>
            <label className="formLabel">Condition</label>
            <input
              className="form-control"
              required
              type="text"
              name="condition"
              id="condition"
              onChange={handleTextChange}
              value={article.condition}
            />
          </div>
          <div>
            <label className="formLabel">Price</label>
            <input
              className="form-control"
              required
              type="text"
              name="price"
              id="price"
              onChange={handleTextChange}
              value={article.price}
            />
          </div>
          <div>
            <label className="formLabel">Image</label>
            <input
              className="form-control"
              required
              type="text"
              name="url"
              id="url"
              onChange={handleTextChange}
              value={article.url}
            />
          </div>
          <button className="button-59">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditArticle;
