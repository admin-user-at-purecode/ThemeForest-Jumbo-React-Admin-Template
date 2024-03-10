import { List } from "@mui/material";
import { projects } from "../../mock_data/currentProjectsData";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
  return (
    <List disablePadding>
      {projects.map((project, index) => (
        <ProjectItem project={project} key={index} />
      ))}
    </List>
  );
};

export default ProjectsList;
