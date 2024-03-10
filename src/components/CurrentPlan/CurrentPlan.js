import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { Card, CardContent, ListItem, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Div from "../Div/Div";
import { cardTitles } from "../../mock_data/cardTitles";
import Image from "../../assets/images/82x82.png";

const CurrentPlan = () => {
  return (
    <Card>
      <CardHeader title={cardTitles.widgets.title.currentPlan} />
      <Divider />
      <CardContent>
        <Stack direction={"row"} spacing={2}>
          <Grid item xs={7}>
            <Typography component={"div"} variant={"body1"} mb={1}>
              <Typography component={"span"} variant={"h1"}>
                Lorem
              </Typography>
            </Typography>
            <Typography variant={"h6"} color={"text.secondary"} mb={2}>
              Lorem ipsum
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: "5px" }}>
                <ArrowForwardIosIcon sx={{ fontSize: 14, mr: 1 }} /> Lorem
              </ListItem>
              <ListItem disablePadding sx={{ mb: "5px" }}>
                <ArrowForwardIosIcon sx={{ fontSize: 14, mr: 1 }} /> Lorem
              </ListItem>
              <ListItem disablePadding sx={{ mb: "5px" }}>
                <ArrowForwardIosIcon sx={{ fontSize: 14, mr: 1 }} /> Lorem
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={5}>
            <Div sx={{ textAlign: "center" }}>
              <img src={Image} alt={""} width={"82"} />
              <Typography variant={"h6"} color={"error"} my={1.5}>
                Lorem Ipsum
              </Typography>
              <Button variant={"contained"}>Lorem</Button>
            </Div>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CurrentPlan;
