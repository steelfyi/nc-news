import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Topics from "./components/Topics";
import "./App.css";
import ArticleCard from "./components/ArticleCard";
import CommentList from "./components/CommentList";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticleCard />} />
        <Route path="/article/:article_id/comments" element={<CommentList />} />
      </Routes>
    </>
  );
}

export default App;
