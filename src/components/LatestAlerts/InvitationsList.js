import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListHeader from "./ListHeader";
import FeedInvitation from "../DailyFeed/FeedTypes/FeedInvitation";

const InvitationsList = ({ notifications, count, noHeader }) => {
  return (
    <>
      {!noHeader && (
        <ListHeader
          title="INVITATIONS"
          count={count}
          action={<Button variant="link">SEE ALL</Button>}
        />
      )}
      <List disablePadding>
        {notifications.map((item) => {
          return <FeedInvitation key={`invitation-${item.id}`} feed={item} />;
        })}
      </List>
    </>
  );
};

export default InvitationsList;
