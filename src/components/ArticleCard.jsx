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
} from "@mui/material";
import ArticleVote from "./ArticleVote";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import CreateComment from "./CreateComment";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Loading from "./Loading";

function ArticleCard() {
  const [articleByID, setArticleByID] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showPostComment, setShowPostComment] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchArticleByID(article_id).then((articleData) => {
      setArticleByID(articleData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <Loading />;
  }

  const handleCommentClick = () => {
    setShowComments(!showComments);
    setShowPostComment(false);
  };

  const handlePostCommentClick = () => {
    setShowPostComment(!showPostComment);
    setShowComments(false);
  };

  return (
    <>
      <div className="main-content">
        <div className="article-container">
          {articleByID.map((article) => (
            <Card key={article.article_id} className="article-card">
              <CardHeader title={article.title} />
              <CardMedia
                image={article.article_img_url}
                title={article.title}
              />
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
                <ArticleVote articlevote={article.votes} />
              </CardContent>
            </Card>
          ))}
        </div>
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
        <AddCommentIcon
          className="post-comment-icon"
          sx={{
            fontSize: "2.5rem",
            color: "#000",
            "&:hover": { color: "#c00" },
            cursor: "pointer",
          }}
          onClick={handlePostCommentClick}
        />
        {showComments && <CommentList />}
        {showPostComment && <CreateComment />}
      </div>
    </>
  );
}

export default ArticleCard;
