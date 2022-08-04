import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import BugReportIcon from "@mui/icons-material/BugReport";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function FlexRowRatio(props) {
  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,

        borderRadius: "sm",
      }}
    >
      <List sx={{ py: "var(--List-divider-gap)" }}>
        {props.data.map((item, index) => (
          <React.Fragment key={item.vulnerability.key}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
                <AspectRatio
                  sx={{ flexBasis: 50, borderRadius: "sm", overflow: "auto" }}
                >
                  {/* <img
                    src={`${item.src}?w=20&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                  /> */}
                  {item.status === "solved" ? (
                    <VerifiedUserIcon fontSize="small" />
                  ) : (
                    <BugReportIcon fontSize="small" />
                  )}
                </AspectRatio>
                <ListItemContent sx={{ display: "inline-flex" }}>
                  <Box>
                    <Typography fontWeight="md">
                      {item.vulnerability.title}
                    </Typography>
                    <Typography flexGrow={1} mt={3} level="body2">
                      {" "}
                      Status : {item.status}
                    </Typography>
                  </Box>

                  <Box
                    m={1}
                    //margin
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Link
                      variant="contained"
                      color="primary"
                      sx={{ height: 40 }}
                      href={`/vulndetails/${props.sessid}/${item.vulnerability.key}`}
                    >
                      Start Coding
                    </Link>
                  </Box>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {index !== props.data.length - 1 && <ListDivider />}
          </React.Fragment>
        ))}
      </List>
    </Sheet>
  );
}
