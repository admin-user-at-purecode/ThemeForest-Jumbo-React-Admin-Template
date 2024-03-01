import React from 'react';
import Link from '@mui/material/Link';
import ListItemButton from "@mui/material/ListItemButton";
import {ListItemIcon} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from '@mui/icons-material/Circle';
import useLayoutSidebar from '../../hooks/useLayoutSidebar';
import { SIDEBAR_VIEWS } from '../../utils/constants/layout';

const menuBefore = {
    left: 0,
    top: 0,
    content: `''`,
    position: 'absolute',
    display: 'inline-block',
    width: '4px',
    height: '100%',
    backgroundColor: 'transparent'
}

const NavItem = (props) => {
    const {item, isNested} = props

    const {sidebarOptions} = useLayoutSidebar();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);

    const label = item.label

    if (!item) return null;

    return (
        <ListItemButton
            component={"li"}
            sx={{
                p: 0,
                overflow: 'hidden',
                borderRadius: isMiniAndClosed ? '50%' : '0 24px 24px 0',
                margin: isMiniAndClosed ? '0 auto' : '0',
                ...(isMiniAndClosed) ? {width: 40, height: 40, justifyContent: 'center'} : {},
                ...(!isMiniAndClosed) ? {'&::before': menuBefore} : {},
                '&:hover': {
                    color: theme => theme.palette.nav.action.hover,
                    backgroundColor: theme => theme.palette.nav.background.hover,
                    ...(!isMiniAndClosed) ? {'&::before': {
                            ...menuBefore,
                            backgroundColor: theme => theme.palette.nav.tick.hover,
                        }} : {}
                },
                ...(false) ? {
                    color: theme => theme.palette.nav.action.active,
                    backgroundColor: theme => theme.palette.nav.background.active,
                    ...(!isMiniAndClosed) ? {'&::before': {
                        ...menuBefore,
                            backgroundColor: theme => theme.palette.nav.tick.active,
                    }}: {},
                } : {},
            }}
        >
            <Link underline={"none"} to="#" {...(item.target ? {target: item.target} : {})}
                  sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden",
                      position: "relative",
                      color: 'inherit',
                      p: theme => !isMiniAndClosed ? theme.spacing(1, 3.75) : 0,
                      ...(isMiniAndClosed) ? {justifyContent: 'center'} : {},
                  }}
            >

                <ListItemIcon sx={{minWidth: isMiniAndClosed ? 20 : 32, color: 'inherit'}}>
                    {
                        isNested ?
                            <CircleIcon sx={{fontSize: 6, ml: 1}}/>
                            :
                            item.icon
                    }
                </ListItemIcon>
                {
                    !isMiniAndClosed &&
                    <ListItemText
                        primary={label}
                        sx={{
                            m: 0,
                            '& .MuiTypography-root': {
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }
                        }}
                    />
                }
            </Link>
        </ListItemButton>
    );
};

export default NavItem;
