import AgentDetail from "./AgentDetail";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { cardTitles } from "../../mock_data/cardTitles";
import { agents } from "../../mock_data/agents";

const PopularAgents = () => {
  return (
    <>
      <Typography variant={"h4"} sx={{ mb: 2 }}>
        {cardTitles.widgets.title.popularAgents}
      </Typography>
      <Grid container spacing={3.75}>
        {agents.map((agent, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <AgentDetail agentDetail={agent} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default PopularAgents;
