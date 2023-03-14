import { useEffect, useState } from "react";
import { fetchArticleByID } from "../api";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

function ArticleCard() {
  const [articleByID, setArticleByID] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchArticleByID(article_id).then((articleData) => {
      setArticleByID(articleData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      {articleByID.map((article) => (
        <Card key={article.article_id}>
          <CardHeader title={article.title} />
          <CardMedia image={article.article_img_url} title={article.title} />
          <CardContent>
            <Typography variant="body1" color="textSecondary">
              {article.created_at} | {article.topic}
            </Typography>
            <Typography variant="body1" paragraph>
              {article.body}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              By {article.author}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default ArticleCard;
