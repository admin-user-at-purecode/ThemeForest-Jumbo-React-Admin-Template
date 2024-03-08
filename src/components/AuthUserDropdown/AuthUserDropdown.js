import Avatar from "@mui/material/Avatar";
import { authUser } from "../../mock_data/user";

import {
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DpPopover from "../DpPopover/DpPopover";
import Div from "../Div/Div";
import { useTheme } from "../../hooks/hooks";

const AuthUserDropdown = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <DpPopover
        triggerButton={
          <Avatar
            src={authUser.profile_pic}
            sizes={"small"}
            sx={{ boxShadow: 25, cursor: "pointer" }}
          />
        }
      >
        <Div
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            p: (theme) => theme.spacing(2.5),
          }}
        >
          <Avatar
            src={authUser.profile_pic}
            alt={authUser.name}
            sx={{ width: 60, height: 60, mb: 2 }}
          />
          <Typography variant={"h5"}>{authUser.name}</Typography>
          <Typography variant={"body1"} color="text.secondary">
            {authUser.handle}
          </Typography>
        </Div>
        <Divider />
        <nav>
          <List disablePadding sx={{ pb: 1 }}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ my: 0 }} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <EditOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Profile" sx={{ my: 0 }} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <RepeatOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Switch User" sx={{ my: 0 }} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ my: 0 }} />
            </ListItemButton>
          </List>
        </nav>
      </DpPopover>
    </ThemeProvider>
  );
};

export default AuthUserDropdown;
