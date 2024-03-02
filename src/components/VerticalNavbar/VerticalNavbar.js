import React from 'react';
import List from "@mui/material/List";
import NavIdentifier from './NavIdentifier';

const VerticalNavbar = ({items}) => {


    return (
        <List
            disablePadding
            sx={{
                mr: 2,
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