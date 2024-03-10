import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardFeatured from "../CardFeatured/CardFeatured";
import Image from "../../assets/images/380x175.png";

const AyurvedaCard = () => {
  return (
    <CardFeatured
      showTick
      tickSx={{ bgcolor: "success.main" }}
      direction={"column"}
      textAlign={"center"}
      imgSrc={Image}
    >
      <Typography variant={"h4"} mb={2}>
        Ayurveda
      </Typography>
      <Typography mb={3}>
        Learn with experts from around the world. Some description about the
        card can be found below.
      </Typography>
      <Button variant={"contained"}>Learn More</Button>
    </CardFeatured>
  );
};

export default AyurvedaCard;
