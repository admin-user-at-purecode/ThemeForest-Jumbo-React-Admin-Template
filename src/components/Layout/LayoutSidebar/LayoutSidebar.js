
import { useCallback } from "react";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {Drawer, Toolbar} from "@mui/material";
import Div from "../../Div/Div";
import { SIDEBAR_STYLES} from '../../../utils/constants/layout';
import { useSidebarTheme,useLayoutSidebar } from "../../../hooks/hooks";

const LayoutSidebar = ({children, headerHeightProps}) => {
    const {sidebarTheme} = useSidebarTheme();
    const {sidebarOptions, setSidebarOptions} = useLayoutSidebar();
    const handleClose = useCallback(() => {
        setSidebarOptions({
            open: false,
        });
    }, []);

    if (sidebarOptions?.hide) {
        return null;
    }
    return (
        <ThemeProvider theme={sidebarTheme}>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        border: 'none',
                        boxShadow: 25,
                        transition: theme => theme.transitions.create(['width']),
                        width: sidebarOptions?.width,
                        ...(sidebarTheme.bgImage ? {
                            background: `url(${sidebarTheme.bgImage}) no-repeat center`,
                            backgroundSize: 'cover',
                        } : {})
                    },
                }}
                anchor={sidebarOptions?.anchor}
                open={sidebarOptions?.open}
                variant={sidebarOptions?.variant}
                transitionDuration={300}
                ModalProps={{
                    keepMounted: true,
                }}
                hideBackdrop={false}
                onClose={handleClose}
            >
                <Div
                    sx={{
                        flex: 1,
                        display: 'flex',
                        minWidth: 0,
                        flexDirection: 'column',
                        minHeight: "100%",
                        overflow: "hidden",
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {
                        sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
                        <Toolbar sx={{flexShrink: 0, ...headerHeightProps}}/>
                    }
                    {children}
                </Div>
                {
                    sidebarTheme?.overlay?.bgColor &&
                    <Div
                        sx={{
                            position: 'absolute',
                            height: '100%',
                            left: 0,
                            right: 0,
                            top: 0,
                            ...((Array.isArray(sidebarTheme.overlay.bgColor) && sidebarTheme.overlay.bgColor.length > 0)
                                    ? {
                                        backgroundImage: `linear-gradient(${sidebarTheme.overlay.bgColor[0]}, ${sidebarTheme.overlay.bgColor[1]})`,
                                        opacity: sidebarTheme.bgImage ? (sidebarTheme.overlay?.opacity ?? .85) : 1,
                                    }
                                    : {
                                        bgcolor: sidebarTheme.overlay.bgColor,
                                        opacity: sidebarTheme.overlay?.opacity ?? 1,
                                    }
                            ),

                        }}
                    />
                }

            </Drawer>
        </ThemeProvider>
    );
};

export default LayoutSidebar;