import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { headerChartData } from "../../mock_data/headerChartData";
import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { cardTitles } from "../../mock_data/cardTitles";

const HeaderChartComponent = () => {
  return (
    <CardQuick
      title={
        <Typography variant={"h2"} color={"common.white"} mb={0}>
          {cardTitles.widgets.title.intranet}
        </Typography>
      }
      action={
        <Breadcrumbs aria-label="breadcrumb" color={"common.white"}>
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Dashboard
          </Link>
          <Typography color="inherit">Intranet</Typography>
        </Breadcrumbs>
      }
      noWrapper
      bgColor={"#2B3361"}
      sx={{
        color: "common.white",
        borderRadius: 0,
        mx: { xs: -4, lg: -6 },
        mt: -4,
      }}
    >
      <ResponsiveContainer width="100%" height={270}>
        <AreaChart
          data={headerChartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" hide />
          <Tooltip labelStyle={{ color: "black" }} cursor={false} />
          <Area
            type="monotone"
            dataKey="Expanse"
            stackId="1"
            stroke="#985EFF"
            fillOpacity={1}
            fill="#985EFF"
          />
          <Area
            type="monotone"
            dataKey="Income"
            stackId="1"
            stroke="#BB86FC"
            fillOpacity={1}
            fill="#BB86FC"
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardQuick>
  );
};

export default HeaderChartComponent;
