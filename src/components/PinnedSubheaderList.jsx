import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function PinnedSubheaderList(props) {
  console.log(props.items);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#FAFAD2",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      <li>
        <ul>
          <ListSubheader>{props.meta}</ListSubheader>

          {props.items.map((tech) => (
            <ListItem key={tech}>
              <ListItemText primary={tech} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}
