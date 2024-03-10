import { useEffect, useState } from "react";
import { CardContent, CardMedia, Collapse, Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EventIcon from "@mui/icons-material/Event";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";
import Image from "../../assets/images/400x212.png"

const EventInviteConfirmCard = () => {
  const [action, setAction] = useState({
    message: "",
    type: "",
  });
  const [confirmation, setConfirmation] = useState("none");
  useEffect(() => {
    switch (confirmation) {
      case "yes":
        setAction({
          type: "success.main",
          message: "Great! see you there at event.",
          icon: <CheckCircleOutlineIcon />,
        });
        break;
      case "no":
        setAction({
          type: "text.primary",
          message: "Thanks for checking this out.",
          icon: <SentimentDissatisfiedSharpIcon />,
        });
        break;
      case "maybe":
        setAction({
          type: "warning.main",
          message: "Setup a reminder.",
          icon: <EventIcon />,
        });
        break;
      default:
        setAction({ type: "", message: "" });
    }
  }, [confirmation]);

  return (
    <CardQuick
      title={
        <Typography variant={"h3"}>
          {cardTitles.widgets.title.eventInvite}
        </Typography>
      }
      subheader={cardTitles.widgets.subheader.eventInvite}
      noWrapper
    >
      <CardMedia component="img" height="212" image={Image} alt={""} />
      <CardContent>
        <Div sx={{ pb: 2 }}>
          <Typography variant={"body1"} mb={2}>
            Join the event to either explore the area of digital media marketing
            or learn more here.
          </Typography>
          <div>
            {
              <Collapse in={!!action.type}>
                <Typography
                  color={`${action.type}`}
                  sx={{
                    "& svg": {
                      verticalAlign: "middle",
                      mr: 1,
                      mt: "-2px",
                    },
                  }}
                >
                  {action.icon}
                  {action.message}
                </Typography>
              </Collapse>
            }
          </div>
        </Div>
        <ButtonGroup>
          <Button onClick={() => setConfirmation("yes")}>Yes</Button>
          <Button onClick={() => setConfirmation("maybe")}>Maybe</Button>
          <Button onClick={() => setConfirmation("no")}>No</Button>
        </ButtonGroup>
      </CardContent>
    </CardQuick>
  );
};

export default EventInviteConfirmCard;
