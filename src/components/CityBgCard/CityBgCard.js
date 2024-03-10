import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import CardQuick from "../CardQuick/CardQuick";
import Overlay from "../Overlay/Overlay";
import Div from "../Div/Div";
import Image from "../../assets/images/680x180.png";
const CityBgCard = () => {
  return (
    <CardQuick noWrapper bgImage={Image} sx={{ height: 125 }}>
      <Overlay
        margin={24}
        opacity={0}
        vAlign={"center"}
        sx={{ color: "common.white" }}
      >
        <Stack
          direction={"row"}
          spacing={3}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <div className={"Stack-item"}>
            <Typography variant={"body1"} fontSize={"12px"} mb={0.25}>
              Friday, 28 Sep
            </Typography>
            <Typography
              variant={"h2"}
              fontSize={"38px"}
              color={"inherit"}
              mb={0}
            >
              01:15 PM
            </Typography>
            <Typography variant={"body1"} fontSize={"12px"}>
              San Francisco
            </Typography>
          </div>
          <Div className={"Stack-item"} sx={{ display: "flex" }}>
            <CloudOutlinedIcon sx={{ fontSize: "80px", mr: 3 }} />
            <div>
              <Typography
                variant={"h2"}
                fontSize={"38px"}
                color={"inherit"}
                mb={0.5}
                sx={{
                  "& sup": {
                    position: "relative",
                    fontSize: "60%",
                    top: "-10px",
                  },
                }}
              >
                23<sup>&#x26AC;</sup>
              </Typography>
              <Typography variant={"body1"} fontSize={"12px"}>
                Thunder strom
              </Typography>
            </div>
          </Div>
        </Stack>
      </Overlay>
    </CardQuick>
  );
};

export default CityBgCard;
