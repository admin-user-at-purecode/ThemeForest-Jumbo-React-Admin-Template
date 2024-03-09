import {
  Avatar,
  AvatarGroup,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Span from "../../Span/Span";
import Div from "../../Div/Div";
const FeedPhotoUpload = ({ feed }) => {
  console.log(
    feed.metaData.user.profile_pic,
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  );
  return (
    <ListItem alignItems={"flex-start"} sx={{ px: 3 }}>
      <ListItemAvatar sx={{ minWidth: 65 }}>
        <Avatar
          sx={{ width: 52, height: 52, boxShadow: 1 }}
          alt={feed.metaData.user.name}
          src={feed.metaData.user.profile_pic}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant={"h6"} color={"text.secondary"}>
            {feed.timeRange}
          </Typography>
        }
        secondary={
          <Typography component={"div"}>
            <Typography color={"text.primary"} mb={2}>
              <Span sx={{ color: "primary.main" }}>
                {feed.metaData.user.name}{" "}
              </Span>
              {"uploaded"} {feed.metaData.count} {"in"}
              <Span sx={{ color: "primary.main" }}> {feed.metaData.group}</Span>
            </Typography>
            <Div sx={{ display: "flex" }}>
              <AvatarGroup max={5}>
                {feed.metaData.photos.map((item, index) => (
                  <Avatar key={index} src={item.photo_url} />
                ))}
              </AvatarGroup>
            </Div>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default FeedPhotoUpload;
