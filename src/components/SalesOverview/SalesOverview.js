import React, {useState} from 'react';
import ChartSalesOverview from "./ChartSalesOverview";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import Stack from "@mui/material/Stack";
import CardQuick from '../CardQuick/CardQuick';
import { salesChartData } from '../../mock_data/salesChartData';
import cardTitles from '../../mock_data/cardTitles';

const SalesOverview = () => {
    const [chartData, setChartData] = useState(salesChartData.monthly);
    return (
        <CardQuick
            noWrapper
            title={<Typography variant={"h4"}>{cardTitles.widgets.title.salesOverview}</Typography>}
            action={
                <Stack direction={"row"} spacing={1}>
                    <Button
                        size={"small"}
                        variant={"contained"}
                        onClick={() => setChartData(salesChartData.monthly)}
                    >
                        Monthly
                    </Button>
                    <Button
                        size={"small"}
                        variant={"contained"}
                        onClick={() => setChartData(salesChartData.yearly)}
                    >
                        Yearly
                    </Button>
                </Stack>
            }
        >
            <ChartSalesOverview data={chartData}/>
        </CardQuick>
    );
};

export default SalesOverview;
