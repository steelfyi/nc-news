import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://ncnews2023.onrender.com/api",
});

export const fetchArticleList = () => {
  return ncNewsAPI.get("/articles").then((response) => {
    const data = response.data.articles;
    return data;
  });
};

export const fetchArticleByID = (article_id) => {
  return ncNewsAPI.get("/articles/" + article_id).then((response) => {
    const data = response.data.article;
    return data;
  });
};

export const fetchComments = (article_id) => {
  return ncNewsAPI
    .get("/articles/" + article_id + "/comments")
    .then((response) => {
      const data = response.data.comments;
      return data;
    });
};
