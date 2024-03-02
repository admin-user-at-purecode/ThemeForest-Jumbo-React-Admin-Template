import ChartAppUsers from "./ChartAppUsers";
import {Typography} from "@mui/material";
import CardQuick from '../CardQuick/CardQuick';
import cardTitles from '../../mock_data/cardTitles'

const AppUsers = () => {
    return (
        <CardQuick
            title={<Typography variant={"h3"}>{cardTitles.widgets.title.appUsers}</Typography>}
            subheader={<Typography variant={"h6"} color={"text.secondary"}
                                   mb={0}>{cardTitles.widgets.subheader.appUsers}</Typography>}
            wrapperSx={{pt: 0}}
        >
            <ChartAppUsers/>
        </CardQuick>
    );
};

export default AppUsers;
