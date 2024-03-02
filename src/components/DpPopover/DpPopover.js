import { useState,useCallback } from "react";

import Popover from "@mui/material/Popover";

const DpPopover = ({triggerButton, children}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
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

export default DpPopover;
