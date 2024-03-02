import ProjectList from "./ProjectList";
import {Typography} from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import cardTitles from "../../mock_data/cardTitles";

const ProjectsListCard = ({scrollHeight}) => {
    return (
        <CardQuick
            title={<Typography variant={"h4"} mb={0}>{cardTitles.widgets.title.projectsList}</Typography>}
            wrapperSx={{p: 0}}
        >
            <Scrollbar
                autoHeight
                autoHeightMin={392}
                autoHide autoHideDuration={200}
                autoHideTimeout={500}
            >
                <ProjectList/>
            </Scrollbar>
        </CardQuick>
    );
};
/* Todo scrollHeight prop define */
export default ProjectsListCard;
