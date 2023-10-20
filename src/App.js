import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/common/Spinner/Spinner";
import "./App.css";

const Nav = React.lazy(() => import("./components/Nav/Nav"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Article = React.lazy(() => import("./components/Article/Article"));
const Articles = React.lazy(() => import("./components/Articles/Articles"));
const Explore = React.lazy(() => import("./components/Explore/Explore"));
// const Filter = React.lazy(() => import("./components/Filter/Filter"));
const NewArticle = React.lazy(() => import("./components/NewArticle/NewArticle"));
const EditArticle = React.lazy(() => import("./components/EditArticle/EditArticle"));



function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner/>}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Explore />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/articles/:id/edit" element={<EditArticle />} />
          <Route path="/new-article" element={<NewArticle />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
