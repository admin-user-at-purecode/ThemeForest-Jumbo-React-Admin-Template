import FeedItem from "./FeedItem";
import {CardActions, Typography} from "@mui/material";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import CardQuick from '../CardQuick/CardQuick';
import Scrollbar from '../Scrollbar/Scrollbar';
import { dailyFeed } from "../../mock_data/dailyFeed";
import cardTitles from "../../mock_data/cardTitles";

const DailyFeed = ({scrollHeight}) => {
    return (
        <CardQuick
            title={cardTitles.widgets.title.dailyFeed}
            action={
                <Chip label={"23 New Feeds"} size={"small"} color={"warning"}/>
            }
            noWrapper
        >
            <Scrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 498}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <List disablePadding>
                    {
                        dailyFeed.map((feed, index) => (
                            <FeedItem key={index} feed={feed}/>
                        ))
                    }
                </List>
            </Scrollbar>
            <Divider/>
            <CardActions sx={{py: theme => theme.spacing(1.5)}}>
                <Typography variant={"h6"} color={"text.secondary"} mb={0}>{"Last Updated 30 min ago"}</Typography>
            </CardActions>
        </CardQuick>
    );
};

export default DailyFeed;
