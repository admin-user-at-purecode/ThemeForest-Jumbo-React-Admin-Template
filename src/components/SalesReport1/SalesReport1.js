import SalesReportChart1 from "./SalesReportChart1";
import {Chip, Typography} from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import cardTitles from "../../mock_data/cardTitles";

const SalesReport1 = () => {
    return (
        <CardQuick
            title={<Typography variant={"h4"} mb={0}>{cardTitles.widgets.title.salesReport1}</Typography>}
            action={<Chip label={"Today"} color={"primary"} size={"small"} />}
            wrapperSx={{pt: 0}}
        >
            <Typography variant={"h2"}>$685k+</Typography>
            <Typography variant={"body1"} color="text.secondary" mb={1.5}>Past 9 months data</Typography>
            <SalesReportChart1/>
        </CardQuick>
    );
};

export default SalesReport1;
