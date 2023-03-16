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

function TopicCard({ topic }) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    if (topic) {
      fetchArticleList({ topic, sortBy: "created_at" }).then((articles) => {
        setArticleList(articles);
      });
    }
  }, [topic]);

  return (
    <Card>
      <CardHeader title={topic} />
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

export default TopicCard;
