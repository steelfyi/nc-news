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
import { Link } from "react-router-dom";
import Loading from "./Loading";

function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticleList().then((articleData) => {
      setArticleList(articleData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Card>
      <CardHeader title="Articles" />
      <CardContent>
        <List>
          {articleList.map((article) => (
            <ListItem key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <ListItemText primary={article.title} />
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ArticleList;
