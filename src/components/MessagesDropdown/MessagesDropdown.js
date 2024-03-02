import React, {useCallback, useState} from 'react';
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from "@mui/material/Button";
import Div from '../Div/Div';
import {CardActions, ThemeProvider} from "@mui/material";

import MessagesTriggerButton from './MessagesTriggerButton';
import MessagesHeader from '../MessagesList/MessagesHeader';
import SettingHeader from '../MessagesSetting/SettingHeader';
import SettingsList from '../MessagesSetting/SettingsList';
import MessagesList from '../MessagesList';
import { useTheme } from '../../hooks/hooks';
import DpPopover from '../DpPopover/DpPopover';
import SearchMessages from './SearchMessages'
const MessagesDropdown = () => {
    const [showSettings, setShowSettings] = useState(false);
    const {theme} = useTheme();

    const toggleSettingWindow = useCallback(() => {
        setShowSettings(showSettings => !showSettings);
    }, [setShowSettings]);

    return (
        <ThemeProvider theme={theme}>
            <DpPopover
                triggerButton={<MessagesTriggerButton/>}
                disableInsideClick
            >
                {
                    showSettings ?
                        <Div sx={{width: 360, maxWidth: '100%'}}>
                            <SettingHeader backClickCallback={toggleSettingWindow}/>
                            <SettingsList/>
                        </Div>
                        :
                        <Div sx={{width: 360, maxWidth: '100%'}}>
                            <MessagesHeader settingMenuCallback={toggleSettingWindow}/>
                            <Div sx={{m: 2, mt: 0}}>
                                <SearchMessages />
                            </Div>
                            <MessagesList/>
                            <Divider/>
                            <CardActions sx={{justifyContent: 'center'}}>
                                <Button
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 'normal',
                                        '&:hover': {bgcolor: 'transparent'}
                                    }}
                                    size={"small"} variant="text" endIcon={<ArrowForwardIcon/>} disableRipple>
                                    View All
                                </Button>
                            </CardActions>
                        </Div>
                }
            </DpPopover>
        </ThemeProvider>
    );
};

export default MessagesDropdown;
