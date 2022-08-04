import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PinnedSubheaderList from "../components/PinnedSubheaderList";
import Button from "@mui/joy/Button";

let SessCreated = false;
const createSession = async (x) => {
  const url = `https://backend-cybercops.herokuapp.com/session/addUsers/${x}`;

  try {
    const response1 = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        //put the keycloak access token in the Authorization header
        Authorization: `Bearer ${UserService.getToken()}`,
        "Access-Control-Allow-Origin":
          "https://cybercops-frontend-2.herokuapp.com/",
      },
    });

    console.log(response1.status);
    if (response1.status === 500) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      console.log(SessCreated);
      SessCreated = true;
      console.log(SessCreated);
    } else {
      const json1 = response1.json();
      console.log(json1);
      console.log("+++++++++++++++++++++++++++++");
    }
  } catch (error) {
    console.log("error", error);
  }
};

function Challengedetails() {
  const [challenges, setChallenges] = useState([]);
  let { key } = useParams();
  useEffect(() => {
    console.log("WAAAAAAAAA SAHBI");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cybercops-challenge.herokuapp.com/challenges/getChallengeByKey/${key}`,
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
        const json = await response.json();
        console.log(
          "==============================================================================="
        );
        console.log(json);
        console.log(
          "==============================================================================="
        );
        setChallenges(json);
        console.log(challenges);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  console.log(key);
  let navigate = useNavigate();
  const click = async (title) => {
    const secondFunction = async () => {
      const result = await createSession(title);
      // do something else here after firstFunction completes
      console.log(SessCreated);
      if (SessCreated) {
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
      }
      if (!SessCreated) {
        console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJ");
        navigate(`/vuln/${title}`);
      }
      SessCreated = false;
    };
    secondFunction();
  };

  const techs = challenges.technologies || [];
  console.log(techs);
  const vuls = challenges.vulnerabilities || [];
  console.log(vuls);
  return (
    <Sheet variant="outlined" color="neutral" sx={{ p: 4, marginTop: 4 }}>
      <Typography level="h2" component="div" sx={{ marginTop: 2 }}>
        Challenge Title : {challenges.title}
      </Typography>
      <Typography level="h2" component="div" sx={{ marginTop: 2 }}>
        Challenge Key : {challenges.key}
      </Typography>
      <Typography level="h2" component="div" sx={{ marginTop: 2 }}>
        Challenge Description : {challenges.description}
      </Typography>
      <Typography level="h2" component="div" sx={{ marginTop: 2 }}>
        Challenge Level : {challenges.level}
      </Typography>
      {techs.length > 0 && (
        <PinnedSubheaderList
          meta="Technologies"
          items={techs}
          sx={{ marginTop: 2 }}
        />
      )}
      {vuls.length > 0 && (
        <PinnedSubheaderList
          meta="Vulnerabilities"
          items={vuls}
          sx={{ marginTop: 2 }}
        />
      )}

      <Button
        variant="outlined"
        size="sm"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ ml: "auto", fontWeight: 600 }}
        onClick={() => click(key)}
      >
        Explore
      </Button>
    </Sheet>
  );
}

export default Challengedetails;
