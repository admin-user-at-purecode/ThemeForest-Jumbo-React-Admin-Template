import React from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import NavIdentifier from './NavIdentifier';

const NavSection = ({item}) => {
    const label = item.label

    if (!item || !item.label) return null;

    const subMenus = (item && item.children && item.children.length > 0) ? item.children : null;

    return (
        <>
            {
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
