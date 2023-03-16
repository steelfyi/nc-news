import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";
import Topics from "./components/Topics";
import "./App.css";
import ArticleCard from "./components/ArticleCard";
import TopicCard from "./components/TopicCard";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticleCard />} />
        <Route path="/topics/:id" element={<TopicCard />} />
      </Routes>
    </>
  );
}

export default App;
