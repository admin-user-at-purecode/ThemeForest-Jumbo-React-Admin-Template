import { Avatar, Button, Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import { cardTitles } from "../../mock_data/cardTitles";
import Image from "../../assets/images/72x72.png";

const FlyingBird = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.flyingBird}
      subheader={cardTitles.widgets.subheader.flyingBird}
      avatar={
        <Avatar
          sx={{ width: 72, height: 72 }}
          alt={"Flying bird"}
          src={Image}
        />
      }
      wrapperSx={{ pt: "5px" }}
    >
      <Typography mb={2}>
        Some description about the card. This widget could be used to describe a
        project, a product, user’s profile or may be more.
      </Typography>
      <Button
        variant={"outlined"}
        sx={{
          "&:hover": {
            color: "common.white",
            backgroundColor: "primary.main",
          },
        }}
      >
        View Profile
      </Button>
    </CardQuick>
  );
};

export default FlyingBird;
