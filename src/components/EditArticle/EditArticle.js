import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleByIdAPI, updateArticleByIdAPI } from "../API/API";

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

  const updateArticle= async (id) => {
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
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          onChange={handleTextChange}
          value={article.name}
        />
      </div>
      <div>
        <label>Size</label>
        <input
          // required
          type="text"
          name="size"
          id="size"
          onChange={handleTextChange}
          value={article.size}
        />
      </div>
      <div>
        <label>Gender</label>
        <input
          required
          type="text"
          name="gender"
          id="gender"
          onChange={handleTextChange}
          value={article.gender}
        />
      </div>
      <div>
        <label>Category</label>
        <input
          required
          type="text"
          name="category"
          id="category"
          onChange={handleTextChange}
          value={article.category}
        />
      </div>
      <div>
        <label>Color</label>
        <input
          required
          type="text"
          name="color"
          id="color"
          onChange={handleTextChange}
          value={article.color}
        />
      </div>
      <div>
        <label>Discription</label>
        <input
          required
          type="text"
          name="discription"
          id="discription"
          onChange={handleTextChange}
          value={article.discription}
        />
      </div>
      <div>
        <label>Condition</label>
        <input
          required
          type="text"
          name="condition"
          id="condition"
          onChange={handleTextChange}
          value={article.condition}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          required
          type="text"
          name="price"
          id="price"
          onChange={handleTextChange}
          value={article.price}
        />
      </div>
      <div>
        <label>Image</label>
        <input
          required
          type="text"
          name="url"
          id="url"
          onChange={handleTextChange}
          value={article.url}
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
  )
}

export default EditArticle