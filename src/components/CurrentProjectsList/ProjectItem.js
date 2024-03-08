import {
  Avatar,
  LinearProgress,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { menuItems } from "../../mock_data/projects";
import ListItemButton from "@mui/material/ListItemButton";
import DdMenu from "../DdMenu/DdMenu";

const ProjectItem = ({ project }) => {
  return (
    <>
      <ListItemButton
        component={"li"}
        sx={{
          p: (theme) => theme.spacing(1, 3),
          borderBottom: 1,
          borderBottomColor: "divider",

          "&:last-child": {
            borderBottomColor: "transparent",
          },
        }}
      >
        <ListItemAvatar>
          <Avatar alt={project.name} src={project.logo} />
        </ListItemAvatar>
        <ListItemText
          sx={{ width: "50%" }}
          primary={
            <Typography variant="h5" mb={0.5}>
              {project.name}
            </Typography>
          }
          secondary={
            <Typography
              variant={"body1"}
              fontSize={12}
              color={"text.secondary"}
            >
              {project.dueDate}
            </Typography>
          }
        />
        <ListItemText sx={{ width: "40%", px: 2 }}>
          <LinearProgress
            variant="determinate"
            color={"success"}
            value={project.progress}
          />
        </ListItemText>
        <ListItemText>
          <DdMenu menuItems={menuItems} />
        </ListItemText>
      </ListItemButton>
    </>
  );
};

export default ProjectItem;
