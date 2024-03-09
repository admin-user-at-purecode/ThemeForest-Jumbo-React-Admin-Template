 'react';
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import {Link, Typography} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { getDateElements } from '../../utils/constants/formatHelpers';
import Span from '../Span/Span';
import { notificationIcons } from './notificationIcons';

const NotificationInvitation = ({item}) => {
    return (
        <ListItemButton component={"li"} alignItems={"flex-start"}>
            <ListItemAvatar>
                <Avatar src={item.user.profile_pic}/>
            </ListItemAvatar>
            <ListItemText>
                <Link underline={"none"} href="#">{item.user.name}</Link> has sent you a group invitation for Global Health
                <Typography component="span" sx={{
                    display: 'flex',
                    fontSize: '90%',
                    mt: .5,
                }}>
                    {notificationIcons[item.type]}
                    <Span sx={{color: 'text.secondary', ml: 1}}>{getDateElements(item.date).time}</Span>
                </Typography>
            </ListItemText>
        </ListItemButton>
    );
};

export default NotificationInvitation;
