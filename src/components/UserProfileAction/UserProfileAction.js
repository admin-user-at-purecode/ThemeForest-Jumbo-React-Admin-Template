import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { CardMedia } from "@mui/material";
import Stack from "@mui/material/Stack";
import CardQuick from "../CardQuick/CardQuick";
import Image from "../../assets/images/640x420.png";
import Image2 from "../../assets/images/60x60.png";

const UserProfileAction = ({ height }) => {
  return (
    <CardQuick noWrapper>
      <CardMedia
        component="img"
        height={height ? height : 242}
        image={Image}
        alt=""
      />
      <Stack direction={"row"} spacing={1}>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            m: (theme) => theme.spacing(-3, 0, 0, 3),
          }}
          src={Image2}
          alt=""
        />
        <ButtonGroup
          fullWidth
          size="large"
          variant={"text"}
          sx={{
            height: 50,
            "& .MuiButtonGroup-grouped:not(:last-of-type)": {
              border: "none",
            },
          }}
        >
          <Button>
            <FavoriteBorderOutlinedIcon />
          </Button>
          <Button>
            <ChatBubbleOutlineOutlinedIcon />
          </Button>
          <Button>
            <InsertLinkOutlinedIcon />
          </Button>
        </ButtonGroup>
      </Stack>
    </CardQuick>
  );
};

export default UserProfileAction;
