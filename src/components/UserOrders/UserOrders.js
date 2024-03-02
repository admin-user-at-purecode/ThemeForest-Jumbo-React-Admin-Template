import ChartOrders from "./ChartOrders";
import {Typography} from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import Div from "../Div/Div";
import { orders } from "../../mock_data/orders";
import cardTitles from "../../mock_data/cardTitles";

const UserOrders = () => {
    return (
        <CardQuick
            noWrapper
            title={<Typography variant={"h5"} mb={.5}>{cardTitles.widgets.title.userOrders}</Typography>}
            subheader={<Typography variant={"h6"} color={"text.secondary"} mb={0}>293</Typography>}
            headerSx={{pb: 0}}
        >
            <Div sx={{mt: -2.5}}>
                <ChartOrders chartData={orders}/>
            </Div>
        </CardQuick>
    );
};

export default UserOrders;
