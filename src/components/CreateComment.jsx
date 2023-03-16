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

  const handleSubmit = async (event) => {
    event.preventDefault();
    postComment(article_id, username, comment);
    setFormVisible(false);
    setSuccessMessage(true);
    setUsername("");
    setComment("");
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
            />
            <FormHelperText />
          </FormControl>
          <Button type="submit" variant="contained" className="submit-button">
            Submit
          </Button>
        </form>
      )}
      {successMessage && (
        <div>
          <p>Your comment has been posted!</p>
        </div>
      )}
    </>
  );
}
export default CreateComment;
