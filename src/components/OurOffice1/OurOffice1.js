import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import CardQuick from "../CardQuick/CardQuick";
import { branches } from "../../mock_data/branches";
import cardTitles from "../../mock_data/cardTitles";

const OurOffice1 = () => {
  const activeBranch = branches[0];
  return (
    <CardQuick title={cardTitles.widgets.title.ourOffice1} noWrapper>
      <List disablePadding>
        <ListItem
          alignItems="flex-start"
          sx={{ p: (theme) => theme.spacing(1.5, 3) }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "text.primary" }}>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary={activeBranch.address} />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={{ p: (theme) => theme.spacing(1.5, 3) }}>
          <ListItemIcon sx={{ minWidth: 36, color: "text.primary" }}>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={activeBranch.phone} />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={{ p: (theme) => theme.spacing(1.5, 3) }}>
          <ListItemIcon sx={{ minWidth: 36, color: "text.primary" }}>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={activeBranch.email} />
        </ListItem>
      </List>
      <Stack
        direction="row"
        spacing={1}
        sx={{ p: (theme) => theme.spacing(3), mb: 0.625 }}
      >
        <Fab
          size="small"
          aria-label="Twitter"
          sx={{
            color: "common.white",
            bgcolor: "#2196f3",

            "&:hover": {
              bgcolor: "#2196f3",
            },
          }}
        >
          <Twitter />
        </Fab>
        <Fab
          size="small"
          aria-label="Facebook"
          sx={{
            color: "common.white",
            bgcolor: "#3f51b5",

            "&:hover": {
              bgcolor: "#3f51b5",
            },
          }}
        >
          <Facebook />
        </Fab>
        <Fab
          size="small"
          aria-label="Instagram"
          sx={{
            color: "common.white",
            bgcolor: "#e91e63",

            "&:hover": {
              bgcolor: "#e91e63",
            },
          }}
        >
          <Instagram />
        </Fab>
        <Fab
          size="small"
          aria-label="LinkedIn"
          sx={{
            color: "common.white",
            bgcolor: "#2196f3",

            "&:hover": {
              bgcolor: "#2196f3",
            },
          }}
        >
          <LinkedIn />
        </Fab>
      </Stack>
    </CardQuick>
  );
};

export default OurOffice1;
