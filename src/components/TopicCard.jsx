import { useParams } from "react-router-dom";
import Topics from "./Topics";

function TopicCard() {
  const { id } = useParams();
  const topic = { id: 1, name: "Topic 1", color: "#f44336" };

  return (
    <>
      <Topics />
      <div>
        <h1>{topic.name}</h1>
        <p>{topic.description}</p>
        <img src={topic.image} alt={topic.name} />
      </div>
    </>
  );
}

export default TopicCard;
