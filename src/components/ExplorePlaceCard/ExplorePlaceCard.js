import { CardActions, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Message, RemoveRedEye, Share } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Div from "../Div/Div";
import CardQuick from "../CardQuick/CardQuick";
import Overlay from "../Overlay/Overlay";
import Image from "../../assets/images/600x800.png";

const ActionButton = () => {
  return (
    <IconButton sx={{ color: "common.white" }}>
      <Share />
    </IconButton>
  );
};
const ExplorePlaceCard = ({ height }) => {
  return (
    <CardQuick
      action={<ActionButton />}
      bgImage={Image}
      sx={{ height: height ? height : 390 }}
      noWrapper
    >
      <Overlay
        opacity={1}
        color={(theme) => theme.palette.background.paper}
        margin={["auto", 20, 20, 20]}
        sx={{
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Div sx={{ p: 3 }}>
          <Stack>
            <Typography variant={"h6"} color={"text.secondary"}>
              26 January, 03:00 PM
            </Typography>
            <Typography variant={"h2"}>
              Explore the best place of the world
            </Typography>
            <Typography variant={"body1"}>
              Plus more tips to keep your feet from stinking this summer
            </Typography>
          </Stack>
        </Div>
        <Divider />
        <CardActions>
          <Stack
            direction={"row"}
            spacing={1}
            color={"text.secondary"}
            flexGrow={1}
            justifyContent={"center"}
          >
            <Typography>
              <Message
                fontSize={"small"}
                sx={{ verticalAlign: "middle", mr: 0.5 }}
              />{" "}
              34
            </Typography>
            <Typography>
              <RemoveRedEye
                fontSize={"small"}
                sx={{ verticalAlign: "middle", mr: 0.5 }}
              />{" "}
              155
            </Typography>
          </Stack>
        </CardActions>
      </Overlay>
    </CardQuick>
  );
};

export default ExplorePlaceCard;
