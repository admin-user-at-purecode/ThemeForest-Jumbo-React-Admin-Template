import { useState } from "react";
import { Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import Image from "../../assets/images/200x230.png";

const GoogleNest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide({ currentSlide: index });
    }
  };
  const products = [Image];

  return (
    <CardQuick sx={{ textAlign: "center" }}>
      <Typography variant={"h3"}>Google Nest</Typography>
      <Typography variant={"body1"} mb={2}>
        Get a powerful speaker and voice assistant. Some description about the
        card.
      </Typography>

      {products.map((item, index) => (
        <img
          src={item}
          alt={""}
          style={{
            margin: "0 auto",
            width: "75%",
          }}
          height={230}
          key={index}
        />
      ))}
      <Div sx={{ mt: 6 }}>
        <Typography variant={"h5"} mb={2}>
          Your Text
        </Typography>
        <Button startIcon={<ShoppingCartOutlinedIcon />} variant={"contained"}>
          Visit Now
        </Button>
      </Div>
    </CardQuick>
  );
};

export default GoogleNest;
