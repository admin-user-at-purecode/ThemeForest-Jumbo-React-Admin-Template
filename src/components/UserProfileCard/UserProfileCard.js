import { IconButton, LinearProgress } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import CardQuick from "../CardQuick/CardQuick";
import Content from "../Content/Content";
import Div from "../Div/Div";
import Image from "../../assets/images/420x380.png";
import Image2 from "../../assets/images/72x72.png";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const UserProfileCard = () => {
  return (
    <CardQuick noWrapper>
      <Content
        action={
          <IconButton sx={{ color: "common.white" }}>
            <MoreHorizIcon />
          </IconButton>
        }
        bgImage={Image}
        backdrop
        sx={{ height: 265 }}
      >
        <Stack
          alignItems={"center"}
          sx={{ p: (theme) => theme.spacing(0, 2), mt: -2 }}
        >
          <Avatar
            sx={{ width: 72, height: 72, mb: 2 }}
            alt={"Chelsea Ray"}
            src={Image2}
          />
          <Typography variant={"h5"} color={"common.white"}>
            Chelsea Ray
          </Typography>
          <Typography variant={"h6"} color={"common.white"}>
            @sofia.halfway
          </Typography>
        </Stack>
        <Div sx={{ width: "75%", m: "16px auto 0" }}>
          <LinearProgress
            variant={"determinate"}
            color={"success"}
            value={80}
            sx={{
              borderRadius: 4,
              height: 5,
              backgroundColor: "#E9EEEF",
            }}
          />
        </Div>
      </Content>
      <CardContent sx={{ p: 0 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={0}
        >
          <Item>
            <Typography variant={"h6"}>457</Typography>
            <Typography>Followers</Typography>
          </Item>
          <Item>
            <Typography variant={"h6"}>689</Typography>
            <Typography>Friends</Typography>
          </Item>
          <Item>
            <Typography variant={"h6"}>283</Typography>
            <Typography>Following</Typography>
          </Item>
        </Stack>
        <Divider />
      </CardContent>
      <CardContent>
        <Typography variant={"h4"}>About Chelsea</Typography>
        <Typography>
          Chelsea is an Australian actress. She was born on August 11, 1983. The
          actress gained super stardom with the role of Amily.
        </Typography>
      </CardContent>
    </CardQuick>
  );
};

export default UserProfileCard;
