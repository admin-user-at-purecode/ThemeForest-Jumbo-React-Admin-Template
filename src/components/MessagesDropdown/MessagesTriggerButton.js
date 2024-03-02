 'react';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {ThemeProvider} from "@mui/material";
import {useHeaderTheme} from '../../hooks/hooks';
import CustomIconButton from "../CustomIconButton/CustomIconButton";

const MessagesTriggerButton = () => {
    const {headerTheme} = useHeaderTheme();
    return (
        <ThemeProvider theme={headerTheme}>
            <CustomIconButton badge={{variant: "dot"}}   elevation={25}>
                <ChatBubbleOutlineOutlinedIcon sx={{fontSize: '1rem'}}/>
            </CustomIconButton>
        </ThemeProvider>
    );
};

export default MessagesTriggerButton;
