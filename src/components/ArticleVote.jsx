import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { patchVote } from "../api";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";

function ArticleVote({ articlevote }) {
  const [vote, setVote] = useState(articlevote);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    patchVote(article_id, vote)
      .then((response) => {
        setVote(response.votes);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id, vote]);

  function IncrementVote() {
    setVote((vote) => vote + 1);
  }

  function DecrementVote() {
    setVote((vote) => vote - 1);
  }
  if (error) {
    return (
      <Alert variant="filled" severity="warning">
        Something went wrong posting your vote please try again
      </Alert>
    );
  }
  return (
    <>
      <Button onClick={IncrementVote}>+{vote}</Button>
      <Button onClick={DecrementVote}>-1</Button>
    </>
  );
}

export default ArticleVote;
