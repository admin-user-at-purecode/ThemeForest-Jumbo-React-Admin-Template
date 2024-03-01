import React from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import NavIdentifier from './NavIdentifier';
import useLayoutSidebar from '../../hooks/useLayoutSidebar';
import { SIDEBAR_VIEWS } from '../../utils/constants/layout';

const NavSection = ({item}) => {
    const {sidebarOptions} = useLayoutSidebar();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);

    const label = item.label

    if (!item || !item.label) return null;

    const subMenus = (item && item.children && item.children.length > 0) ? item.children : null;

    return (
        <>
            {
                !isMiniAndClosed &&
                <ListSubheader
                    component="li"
                    disableSticky
                    sx={{
                        fontSize: '80%',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        textTransform: 'uppercase',
                        bgcolor: 'transparent',
                        p: theme => theme.spacing(3.75, 3.75, 1.875)
                    }}
                >
                    {label}
                </ListSubheader>
            }
            {
                subMenus &&
                subMenus.map((child, index) => {
                    return (<NavIdentifier item={child} key={index}/>)
                })
            }
        </>
    )
};

export default React.memo(NavSection);
