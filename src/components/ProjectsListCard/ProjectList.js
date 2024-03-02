import { projects } from "../../mock_data/projects";
import ProjectItem from "./ProjectItem";
import {List} from "@mui/material";

const ProjectList = () => {
    return (
        <List disablePadding>
            {
                projects.map((project, index) => (
                    <ProjectItem key={index} project={project}/>
                ))
            }
        </List>
    );
};

export default ProjectList;
