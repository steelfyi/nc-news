import { useEffect, useState } from "react";
import { fetchComments } from "../api";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { PlusOneRounded } from "@mui/icons-material";
import Loading from "./Loading";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { article_id } = useParams();
  console.log(comments);

  useEffect(() => {
    setLoading(true);
    fetchComments(article_id).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {comments.map((comment) => (
        <Card key={comment.comment_id} className="comment-list ">
          <CardHeader title={comment.title} />

          <CardContent>
            <Typography variant="body1" color="textSecondary">
              {comment.created_at}
            </Typography>
            <Typography variant="body1" paragraph>
              {comment.body}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              By {comment.author}
            </Typography>
            <PlusOneRounded />
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default CommentList;
