import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { patchVote } from "../api";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";

function ArticleVote({ articlevote }) {
  const [vote, setVote] = useState(articlevote);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  function IncrementVote() {
    setVote((vote) => vote + 1);
    patchVote(article_id, vote + 1).catch((err) => {
      setError(err);
    });
  }

  function DecrementVote() {
    setVote((vote) => vote - 1);
    patchVote(article_id, vote - 1).catch((err) => {
      setError(err);
    });
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
      <Button onClick={IncrementVote}>+1</Button>
      <p>{vote}</p>
      <Button onClick={DecrementVote}>-1</Button>
    </>
  );
}

export default ArticleVote;
