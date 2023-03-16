import { Grid, Chip } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { fetchTopics } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopicCard from "./TopicCard";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTopics, setShowTopics] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [topic, setTopic] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchTopics().then((topicData) => {
      setTopics(topicData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  const handleTopicClick = (topic) => {
    setTopic(topic);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("topic", topic);
    setSearchParams(newSearchParams);
    setShowTopics(true);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%", padding: 16 }}
      >
        {topics.map((topic) => (
          <Grid
            item
            key={topic.slug}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Chip
              label={topic.slug}
              onClick={() => handleTopicClick(topic.slug)}
              style={{
                backgroundColor: topic.color,
                borderRadius: "0%",
                color: "white",
                fontWeight: "bold",
                fontSize: "2.5rem",
                padding: "2rem",
                cursor: "pointer",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Grid>
        ))}
      </Grid>
      {showTopics && <TopicCard topic={topic} />}
    </>
  );
}

export default Topics;
