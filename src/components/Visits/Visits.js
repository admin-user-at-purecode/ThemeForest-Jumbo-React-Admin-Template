import CardQuick from '../CardQuick/CardQuick';
import {Chip, Typography} from "@mui/material";
import {TrendingUp} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Span from '../Span/Span';
import Div from '../Div/Div';
import { cardTitles } from '../../mock_data/cardTitles';

const Visits = () => {
    return (
        <CardQuick
            title={cardTitles.widgets.title.visits}
            action={
                <Stack direction={"row"} spacing={1}>
                    <Chip label={"Today"} color={"primary"} size={"small"}/>
                    <ShowChartIcon fontSize={"small"}/>
                </Stack>
            }
            headerSx={{
                borderBottom: 1,
                borderBottomColor: 'divider'
            }}
        >
            <Stack direction={"row"} sx={{maxWidth: 600, mx: 'auto'}}>
                <Div sx={{width: '50%', textAlign: 'center'}}>
                    <Typography variant={"h2"}>406,42</Typography>
                    <Typography variant={"body1"}>Rapid pace:
                        <Span sx={{color: 'success.main', ml: 1}}>23%
                            <TrendingUp fontSize={"small"} sx={{verticalAlign: 'middle', ml: 1}}/>
                        </Span>
                    </Typography>
                </Div>
                <Div sx={{width: '50%', textAlign: 'center'}}>
                    <Typography variant={"h2"}>206,12</Typography>
                    <Typography variant={"body1"}>Slow pace:
                        <Span sx={{color: 'error.main', ml: 1}}>1.58%
                            <TrendingUp fontSize={"small"} sx={{verticalAlign: 'middle', ml: 1}}/>
                        </Span>
                    </Typography>
                </Div>
            </Stack>
        </CardQuick>
    );
};

export default Visits;
