import Typography from "@mui/material/Typography";
import CardQuick from "../CardQuick/CardQuick";
import OnlineSignupChart from "../OnlineSignups/OnlineSignupChart";
import Chip from "@mui/material/Chip";
import cardTitles from "../../mock_data/cardTitles";

const TotalRevenueThisYear = () => {
    return (
        <CardQuick
            title={<Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>$235,659</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.white"}
                    mb={0}>{cardTitles.widgets.subheader.totalRevenueYear}</Typography>
            }
            action={<Chip size={"small"} label={"2022"} sx={{bgcolor: '#F5F7FA', color: 'grey.800'}}/>}
            reverse
            sx={{color: "common.white", borderTop: "4px solid #E73145"}}
            bgColor={["#f4a3ac", "#e73145"]}
            wrapperSx={{pb: 0}}
        >
            <OnlineSignupChart/>
        </CardQuick>
    );
};

export default TotalRevenueThisYear;
