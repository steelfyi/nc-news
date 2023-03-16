import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { postComment } from "../api";

function CreateComment() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const { article_id } = useParams();
  const [formVisible, setFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, username, comment)
      .then((response) => {
        console.log("your response", response);
        setFormVisible(false);
        setSuccessMessage(true);
        setUsername("");
        setComment("");
      })
      .catch((err) => {
        setErrorMessage(true);
      });
  };

  return (
    <>
      {formVisible && (
        <form onSubmit={handleSubmit} className="post-comment">
          <FormControl className="username-input">
            <OutlinedInput
              placeholder="Username"
              value="jessjelly"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FormHelperText />
          </FormControl>
          <FormControl className="comment-input">
            <OutlinedInput
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              multiline
              rows={4}
              required
            />
            <FormHelperText />
          </FormControl>
          <Button type="submit" variant="contained" className="submit-button">
            Submit
          </Button>
        </form>
      )}
      {successMessage && !errorMessage && (
        <div>
          <p>Your comment has been posted!</p>
        </div>
      )}
      {errorMessage && !successMessage && (
        <div>
          <p>
            Sorry, there was an error posting your comment. Please try again
            later.
          </p>
        </div>
      )}
    </>
  );
}
export default CreateComment;
