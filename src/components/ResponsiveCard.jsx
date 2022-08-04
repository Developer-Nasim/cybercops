import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "./Alert";

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

export default function ContainerResponsive(props) {
  let navigate = useNavigate();

  const click = (key) => {
    console.log(key);
    navigate(`/challengeDetails/${key}`);
  };
  return (
    <>
      <Box sx={{ minHeight: 350 }}>
        <Card
          variant="outlined"
          sx={(theme) => ({
            width: 300,
            gridColumn: "span 2",
            flexDirection: "row",
            flexWrap: "wrap",
            resize: "horizontal",
            overflow: "hidden",
            gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
            transition: "transform 0.3s, border 0.3s",
            "&:hover": {
              borderColor: theme.vars.palette.primary.outlinedHoverBorder,
              transform: "translateY(-2px)",
            },
            "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
          })}
        >
          <AspectRatio
            variant="soft"
            sx={{
              flexGrow: 1,
              display: "contents",
              "--AspectRatio-paddingBottom":
                "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
            }}
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
            />
          </AspectRatio>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: "200px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <div>
                <Typography level="h2" sx={{ fontSize: "md" }} mb={0.5}>
                  <Link
                    href="#container-responsive"
                    overlay
                    underline="none"
                    sx={{
                      color: "text.primary",
                      "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
                    }}
                  >
                    {props.title}
                  </Link>
                </Typography>
                <Typography level="body2">Level : {props.level}</Typography>
              </div>
              <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                sx={{ ml: "auto", alignSelf: "flex-start" }}
              >
                <FavoriteBorderRoundedIcon color="danger" />
              </IconButton>
            </Box>
            <AspectRatio
              variant="soft"
              sx={{
                "--AspectRatio-paddingBottom":
                  "clamp(0px, (100% - 200px) * 999, 200px)",
                pointerEvents: "none",
              }}
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
              />
            </AspectRatio>
            <Button
              variant="outlined"
              size="sm"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", fontWeight: 600 }}
              onClick={() => click(props.ckey)}
            >
              Explore
            </Button>
          </Box>
        </Card>
      </Box>
      {/* {!SessC ? "" : <Alert />} */}
    </>
  );
}
