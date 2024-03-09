import List from "@mui/material/List";
import Button from "@mui/material/Button";
import FeedMessage from "./FeedMessage";
import ListHeader from "../LatestAlerts/ListHeader";

const MessagesList = ({ title, count, notifications, noHeader }) => {
  return (
    <>
      {!noHeader && (
        <ListHeader
          title="MESSAGES"
          count={count}
          action={<Button variant="link">SEE ALL</Button>}
        />
      )}
      <List disablePadding>
        {notifications.map((item) => {
          return <FeedMessage key={`message-${item.id}`} feed={item} />;
        })}
      </List>
    </>
  );
};

export default MessagesList;
