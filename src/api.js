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
