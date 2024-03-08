import CardQuick from "../CardQuick/CardQuick";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { ticketsStatus } from "../../mock_data/ticketsStatus";
import List from "@mui/material/List";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import styled from "@emotion/styled";
import { cardTitles } from "../../mock_data/cardTitles";

const ListItemInline = styled(ListItem)(({ theme }) => ({
  width: "auto",
  display: "inline-flex",
  padding: theme.spacing(0, 0.5),
}));

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <List disablePadding>
      {payload.map((entry, index) => {
        return (
          <ListItemInline key={`item-${index}`}>
            <ListItemIcon sx={{ minWidth: 20 }}>
              <FiberManualRecordIcon
                fontSize={"10px"}
                sx={{ color: entry.color }}
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant={"body1"} fontSize={"12px"}>
                  {entry.value}
                </Typography>
              }
            />
          </ListItemInline>
        );
      })}
    </List>
  );
};

const TicketsStatus = () => {
  return (
    <CardQuick
      title={cardTitles.widgets.title.ticketStatus}
      sx={{ textAlign: "center" }}
      wrapperSx={{
        pt: 2,
        "&:last-child": {
          pb: 6.5,
        },
      }}
    >
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <text
            x="50%"
            className="h1"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          />
          <Pie
            data={ticketsStatus}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={80}
            fill="#8884d8"
          >
            {ticketsStatus.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          </Pie>
          <Legend
            content={renderLegend}
            wrapperStyle={{ position: "absolute", bottom: -24 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </CardQuick>
  );
};

export default TicketsStatus;
