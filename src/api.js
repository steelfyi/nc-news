import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://ncnews2023.onrender.com/api",
});

export const fetchArticleList = () => {
  return newsAPI.get("/articles").then((response) => {
    const data = response.data.articles;
    return data;
  });
};

export const fetchArticleByID = (article_id) => {

  return newsAPI.get("/articles/" + article_id).then((response) => {
    const data = response.data.article;
    return data;
  });
};


export const patchVote = (articleID, vote) => {
  return newsAPI
    .patch("/articles/" + articleID, { inc_votes: vote })
    .then((response) => {
      const data = response.data.article;
    })
  }

export const fetchComments = (article_id) => {
  return newsAPI
    .get("/articles/" + article_id + "/comments")
    .then((response) => {
      const data = response.data.comments;
      return data;
    });
};
