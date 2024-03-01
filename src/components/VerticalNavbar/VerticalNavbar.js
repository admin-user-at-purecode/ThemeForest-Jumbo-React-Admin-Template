import React from 'react';
import List from "@mui/material/List";
import NavIdentifier from './NavIdentifier';
import useLayoutSidebar from '../../hooks/useLayoutSidebar';
import { SIDEBAR_VIEWS } from '../../utils/constants/layout';

const VerticalNavbar = ({items}) => {
    const {sidebarOptions} = useLayoutSidebar();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);

    return (
        <List
            disablePadding
            sx={{
                mr: isMiniAndClosed ? 0 : 2,
                pb: 2
            }}
        >
            {
                items.map((item, index) => (
                    <NavIdentifier translate item={item} key={index} />
                ))
            }
        </List>
    );
};

export default VerticalNavbar;