import { useEffect, useState } from "react";
import { fetchArticleByID } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
  Fab,
} from "@mui/material";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

function ArticleCard() {
  const [articleByID, setArticleByID] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
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

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      {articleByID.map((article) => (
        <Card key={article.article_id} className="article-card">
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
      <CommentRoundedIcon
        className="comment-icon"
        sx={{
          fontSize: "2.5rem",
          color: "#f00",
          "&:hover": { color: "#c00" },
          cursor: "pointer",
        }}
        onClick={handleCommentClick}
      />
      {showComments && <CommentList />}
    </>
  );
}

export default ArticleCard;
