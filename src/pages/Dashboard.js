import React from "react";
import { Typography, Grid } from "@mui/material";
import Card from "../components/Card";
import ResponsiveCard from "../components/ResponsiveCard";
import { useState, useEffect } from "react";
import UserService from "../services/UserService";

function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          "https://backend-cybercops.herokuapp.com/session/getAll",
          {
            method: "GET",
            mode: "cors",
            headers: {
              //put the keycloak access token in the Authorization header
              Authorization: `Bearer ${UserService.getToken()}`,
              "Access-Control-Allow-Origin":
                "https://cybercops-frontend-2.herokuapp.com/",
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const json1 = await response1.json();
        console.log(json1);
        setSessions(json1);
      } catch (error) {
        console.log("error", error);
      }

      try {
        console.log(UserService.getToken());
        const response = await fetch(
          "https://backend-cybercops.herokuapp.com/challenges/getAll",
          {
            method: "GET",
            mode: "cors",
            headers: {
              //put the keycloak access token in the Authorization header
              Authorization: `Bearer ${UserService.getToken()}`,
              "Access-Control-Allow-Origin":
                "https://cybercops-frontend-2.herokuapp.com/",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setChallenges(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" mt={17} align="center">
          List of sessions
        </Typography>
      </Grid>

      {sessions.map((session, idx) => (
        <Grid item xs="auto" key={idx}>
          <Card
            key={idx}
            title={session.challenge.title}
            level={session.challenge.level}
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhyjnoIeW5cI-sY86x4qNmExofLksKICdTA&usqp=CAU"
          />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Typography variant="h4" mt={17} align="center">
          List of challenges
        </Typography>
      </Grid>

      {challenges.map((challenge, idx) => (
        <Grid item xs="auto" key={idx}>
          <ResponsiveCard
            title={challenge.title}
            ckey={challenge.key}
            level={challenge.level}
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhyjnoIeW5cI-sY86x4qNmExofLksKICdTA&usqp=CAU"
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;
