 'react';
import List from "@mui/material/List";
import MessageItem from "./MessageItem";
import messages from "../../mock_data/messages";

const MessagesList = () => {
    return (
        <List disablePadding>
            {
                messages.map((item, index) => {
                    return (
                        <MessageItem key={index} item={item}/>
                    )
                })
            }
        </List>
    );
};

export default MessagesList;
