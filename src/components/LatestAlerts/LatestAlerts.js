import { useState } from "react";
import Chip from "@mui/material/Chip";
import { CardActions, Link } from "@mui/material";
import Tab from "@mui/material/Tab";
import { TabContext, TabPanel } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import Divider from "@mui/material/Divider";
import CardQuick from "../CardQuick/CardQuick";
import Scrollbar from "../Scrollbar/Scrollbar";
import MessagesList from "./components/FeedMessages/MessagesList";
import FeedsList from "./components/FeedsList";
import InvitationsList from "./components/InvitationsList";
import { latestNotifications } from "../../mock_data/latestNotifications";
import { cardTitles } from "../../mock_data/cardTitles";

const NotificationListComponents = {
  MESSAGES: MessagesList,
  FEEDS: FeedsList,
  INVITATIONS: InvitationsList,
};

const LatestAlerts = ({ scrollHeight }) => {
  const [value, setValue] = useState("notification");
  return (
    <CardQuick
      noWrapper
      title={cardTitles.widgets.title.latestAlerts}
      action={<Chip size={"small"} label={"2 New"} color={"secondary"} />}
    >
      <TabContext value={value}>
        <TabList
          sx={{ borderBottom: 1, borderColor: "divider" }}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <Tab
            label={"App Notifications"}
            value={"notification"}
            sx={{ flex: "1 1 auto" }}
          />
          <Tab label={"Feeds"} value={"feed"} sx={{ flex: "1 1 auto" }} />
        </TabList>
        <TabPanel value="notification" sx={{ p: 0 }}>
          <Scrollbar
            autoHeight
            autoHeightMin={scrollHeight ? scrollHeight : 448}
            autoHide
            autoHideDuration={200}
            autoHideTimeout={500}
          >
            {latestNotifications.map((notificationGroupType, index) => {
              const GroupTypeComponent =
                NotificationListComponents[`${notificationGroupType.type}`];
              return (
                <GroupTypeComponent
                  key={index}
                  notifications={notificationGroupType.records}
                  count={notificationGroupType.total}
                  noHeader={true}
                />
              );
            })}
          </Scrollbar>
        </TabPanel>
        <TabPanel value="feed" sx={{ p: 0 }}>
          <Scrollbar
            autoHeight
            autoHeightMin={scrollHeight ? scrollHeight : 452}
            autoHide
            autoHideDuration={200}
            autoHideTimeout={500}
          >
            <FeedsList
              notifications={latestNotifications[2].records}
              count={latestNotifications[2].count}
              noHeader={true}
            />
          </Scrollbar>
        </TabPanel>
      </TabContext>
      <Divider />
      <CardActions sx={{ py: (theme) => theme.spacing(1.5) }}>
        <Link href={"#/"} underline={"none"} lineHeight={1.2}>
          Learn More
        </Link>
      </CardActions>
    </CardQuick>
  );
};

export default LatestAlerts;
