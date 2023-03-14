import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Topics from "./components/Topics";
import "./App.css";
import ArticleCard from "./components/ArticleCard";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route
          path="/"
          element={<ArticleList loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="/article/:article_id"
          element={<ArticleCard loading={loading} setLoading={setLoading} />}
        />
      </Routes>
    </>
  );
}

export default App;
