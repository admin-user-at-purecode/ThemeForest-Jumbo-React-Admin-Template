import React from 'react';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {ThemeProvider} from "@mui/material";
import IconButton from '../../CustomIconButton/CustomIconButton';
import useHeaderTheme from '../../../hooks/useHeaderTheme';

const MessagesTriggerButton = () => {
    const {headerTheme} = useHeaderTheme();
    return (
        <ThemeProvider theme={headerTheme}>
            <IconButton badge={{variant: "dot"}}   elevation={25}>
                <ChatBubbleOutlineOutlinedIcon sx={{fontSize: '1rem'}}/>
            </IconButton>
        </ThemeProvider>
    );
};

export default MessagesTriggerButton;
