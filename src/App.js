import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";
import Topics from "./components/Topics";
import "./App.css";
import ArticleCard from "./components/ArticleCard";
import ArticleVote from "./components/ArticleVote";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticleCard />} />
        <Route path="/article/articlevote" element={<ArticleVote />} />
      </Routes>
    </>
  );
}

export default App;
