import { useState, useEffect } from "react";
import { fetchArticleList } from "../api";
import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function ArticleList({ loading, setLoading }) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticleList().then((articleData) => {
      setArticleList(articleData);
      setLoading(false);
      console.log(articleData);
    });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Card>
      <CardHeader title="All articles" />
      <CardContent>
        <List>
          {articleList.map((article) => (
            <ListItem key={article.article_id}>
              <ListItemText primary={article.title} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ArticleList;
