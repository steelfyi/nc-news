import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Topics() {
  return (
    <Card>
      <CardHeader title="Topics" />
      <CardContent>
        <List>
          <ListItem>I am a topic</ListItem>
          <ListItem>I am a topic</ListItem>
          <ListItem>I am a topic</ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Topics;
