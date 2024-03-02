import React from "react";
import styled from "@mui/material/styles/styled";
import {useLayoutSidebar} from "../../hooks/hooks";
import {SIDEBAR_VIEWS} from "../../utils/constants/layout";

export const DrawerHeader = styled('div')(({theme}) => {
    const {sidebarOptions} = useLayoutSidebar();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);
    return ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, !isMiniAndClosed ? 3.75 : 2.5),
        justifyContent: 'space-between',
        minHeight: '80px',
    })
});
