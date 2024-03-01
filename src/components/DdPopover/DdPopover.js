import React from 'react';
import Popover from "@mui/material/Popover";

const DdPopover = ({triggerButton, children}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = React.useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <>
            <span onClick={handleClick}>
                {triggerButton}
            </span>
            <Popover
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    mt: 2,
                    mr: 6
                }}
            >
                {children}
            </Popover>
        </>
    );
};

export default DdPopover;
